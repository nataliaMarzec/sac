var express = require('express');
var router = express.Router();
var {Op} = require('sequelize');
const {Empresa,Voucher} = require('../models/sequelizeConnection.js')
//Voucher y empresaModel

const Afip = require('../afip/afip');

// router.get('/', async (req, res, next) => {
// 	try {
// 		const { empresa_id } = req;

// 		const empresa =  await Empresa.findById(empresa_id);
// 		if(!empresa.cert || !empresa.key) throw new ErrorHandler(500, 'El ususrio empresa no tiene certificado');

// 		const afip = new Afip({ 
// 			CUIT: empresa.cuit, 
// 			empresa_cert: empresa.cert, 
// 			empresa_key: empresa.key 
// 		});

// 		// const aliquotTypes = await afip.ElectronicBilling.getAliquotTypes();
// 		// const conceptTypes = await afip.ElectronicBilling.getConceptTypes();
// 		// const currenciesTypes = await afip.ElectronicBilling.getCurrenciesTypes();
// 		const documentTypes = await afip.ElectronicBilling.getDocumentTypes();
// 		// const optionsTypes = await afip.ElectronicBilling.getOptionsTypes();
// 		// const taxTypes = await afip.ElectronicBilling.getTaxTypes();
// 		const voucherTypes = await afip.ElectronicBilling.getVoucherTypes();

// 		res.status(200).json({
// 			// aliquotTypes,
// 			// conceptTypes,
// 			// currenciesTypes,
// 			documentTypes,
// 			// optionsTypes,
// 			// taxTypes,
// 			voucherTypes,
// 		});
// 	} catch (error) {
// 		next(error)
// 	}
// })

// router.get('/:fchDesde/:fchHasta/:cbteTipo',async (req, res, next) => {
// 	try {
// 		const { fchDesde, fchHasta, cbteTipo } = req.params;

// 		const empresa = await Empresa.findById(req.usuarioDeEmpresaId);
// 		const result = await Voucher.find({
// 			CbteFch: {
// 				$gte: parseInt(fchDesde.replace(/-/g, '')),
// 				$lte: parseInt(fchHasta.replace(/-/g, '')),
// 			},
// 			empresa_id:empresa._id,
// 			CbteTipo: cbteTipo,
// 		});

// 		if(result.length == 0) throw new ErrorHandler(404, 'No se encontraron los resultados'); 
			
// 		res.status(200).json(result);

// 	} catch (error) {
// 		next(error)
// 	}
// })

// router.get('/:_id',async (req, res, next) => {
// 	try {
// 		const { _id } = req.params;
		
// 		const doc = await Voucher.findById(_id);
// 		if(!doc) throw new ErrorHandler(404, 'La factura no existe');
		
// 		const empresa = await Empresa.findById(req.usuarioDeEmpresaId);
// 		if(!empresa.cert || !empresa.key) throw new ErrorHandler(500, 'El usuario de empresa no tiene cert');

// 		const afip = new Afip({ 
// 			CUIT: empresa.cuit, 
// 			empresa_cert: empresa.cert, 
// 			empresa_key: empresa.key 
// 		});

// 		//Devuelve la informacón del comprobante 1 para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
// 		const voucherInfo = await afip.ElectronicBilling.getVoucherInfo(doc.CbteDesde, doc.PtoVta, doc.CbteTipo); 
// 		if(voucherInfo === null){
// 			console.log(`El comprobante: ${doc.CbteDesde} no existe`);
// 		}

// 		res.status(200).json({ docVoucher, voucherInfo });
// 	} catch (error) {
// 		next(error)
// 	}
// })

// router.post('/', async (req, res, next) => {
// 	try {
// 		const { usuario_id,empresa_id } = req;

// 		const empresa =  await Empresa.findById(empresa_id);
// 		if(!empresa.cert || !empresa.key) throw new ErrorHandler(500, 'El usuario de empresa no tiene cert');

// 		const afip = new Afip({ 
// 			CUIT: empresa.cuit, 
// 			empresa_cert: empresa.cert, //crear atributos cert y key
// 			empresa_key: empresa.key 
// 		});

// 		var requestVoucher = req.body;
// 		//Devuelve el número del último comprobante creado para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
// 		const lastVoucher = await afip.ElectronicBilling.getLastVoucher(requestVoucher.PtoVta, requestVoucher.CbteTipo);

// 		requestVoucher.CbteDesde = lastVoucher + 1;
// 		requestVoucher.CbteHasta = lastVoucher + 1;

// 		const results = await afip.ElectronicBilling.createVoucher(requestVoucher, true);

// 		if (Array.isArray(results.FeDetResp.FECAEDetResponse)) {
// 			results.FeDetResp.FECAEDetResponse = results.FeDetResp.FECAEDetResponse[0];
// 		}

// 		let newVoucher = new Voucher({
// 			detail: {
// 				...requestVoucher,
// 				CAE: results.FeDetResp.FECAEDetResponse.CAE,
// 				CAEFchVto: afip.ElectronicBilling.formatDate(results.FeDetResp.FECAEDetResponse.CAEFchVto),
// 			},
// 			results,
// 			empresa_id,
// 			usuario_id,
// 		});
		
// 		// save model to database
// 		await newVoucher.save();
// 		res.status(200).json(newVoucher);
// 	} catch (error) {
// 		next(error)
// 	}
// })

module.exports = router;