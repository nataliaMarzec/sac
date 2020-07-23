const fs = require('fs');
const path = require('path');
const soap = require('soap');
const forge = require('node-forge');
const xml2js = require('xml2js');

// XML parser
var xmlParser = new xml2js.Parser({
	normalizeTags: true,
	normalize: true,
	explicitArray: false,
	attrkey: 'header',
	tagNameProcessors: [key => key.replace('soapenv:', '')]
});

const AfipSdk = require('@afipsdk/afip.js');

module.exports = class Afip extends AfipSdk {
    
    constructor(options = {}) {
        super(options);

        this.EMPRESA_CERT = options['empresa_cert'];
        this.EMPRESA_PRIVATEKEY = options['empresa_key'];
	}

    async CreateServiceTA(service) {
        const date = new Date();
        // Tokent request authorization XML	
        const tra = (`<?xml version="1.0" encoding="UTF-8" ?>
        <loginTicketRequest version="1.0">
            <header>
                <uniqueId>${Math.floor(date.getTime() / 1000)}</uniqueId>
                <generationTime>${new Date(date.getTime() - 600000).toISOString()}</generationTime>
                <expirationTime>${new Date(date.getTime() + 600000).toISOString()}</expirationTime>
            </header>
            <service>${service}</service>
        </loginTicketRequest>`).trim();
        
        var [cert, key] = [this.EMPRESA_CERT.toString("utf8"), this.EMPRESA_PRIVATEKEY.toString("utf8")];

        if(!cert && !key){
            // Get cert file content
            const certPromise = new Promise((resolve, reject) => {
                fs.readFile(this.CERT, { encoding:'utf8' }, (err, data) => err ? reject(err) : resolve(data));
            });
        
            // Get key file content
            const keyPromise = new Promise((resolve, reject) => {
                fs.readFile(this.PRIVATEKEY, { encoding:'utf8' }, (err, data) => err ? reject(err) : resolve(data));
            });
    
            // Wait for cert and key content
            [cert, key] = await Promise.all([certPromise, keyPromise]);
        }

        // Sign Tokent request authorization XML
        const p7 = forge.pkcs7.createSignedData();
        p7.content = forge.util.createBuffer(tra, "utf8");
        p7.addCertificate(cert);
        p7.addSigner({
            authenticatedAttributes: [{
                type: forge.pki.oids.contentType,
                value: forge.pki.oids.data,
            }, 
            {
                type: forge.pki.oids.messageDigest
            }, 
            {
                type: forge.pki.oids.signingTime, 
                value: new Date()
            }],
            certificate: cert,
            digestAlgorithm: forge.pki.oids.sha256,
            key: key,
        });
        p7.sign();
        const bytes = forge.asn1.toDer(p7.toAsn1()).getBytes();
        const signedTRA = Buffer.from(bytes, "binary").toString("base64");
    
        const soapClientOptions = { disableCache:true, endpoint: this.WSAA_URL };
        const soapClient = await soap.createClientAsync(this.WSAA_WSDL, soapClientOptions);
        // Argumentos para soap client request 
        const loginArguments = { in0: signedTRA };
        // llama al metodo loginCms SOAP 
        const [ loginCmsResult ] = await soapClient.loginCmsAsync(loginArguments)
    
        // Parsea loginCmsReturn a JSON 
        const res = await xmlParser.parseStringPromise(loginCmsResult.loginCmsReturn); 
    
        // Declara(ta) token authorization file path
        const taFilePath = path.resolve(
            this.TA_FOLDER,
            `TA-${this.options['CUIT']}-${service}${this.options['production'] ? '-production' : ''}.json`
        );
        
        // Save (ta)Token authorization data a json file
        await (new Promise((resolve, reject) => {
            fs.writeFile(taFilePath, JSON.stringify(res.loginticketresponse), (err) => {
                if (err) {reject(err);return;}
                resolve();
            });
        }));
    }
}