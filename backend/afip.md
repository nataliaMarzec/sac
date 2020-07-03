 # Se usará la siguiente librería:
   [Afip.js](https://github.com/nataliaMarzec/afip.js)

   [node-soap](https://www.npmjs.com/package/soap)
   
   
 # Instalar :

  `npm install --save @afipsdk/afip.js`

  `npm install node-soap-client --save`

  `npm install soap --save`(sin usar)


 # Crear certificado y clave : 

 [certykey](http://www.afip.gob.ar/ws/WSASS/html/generarcsr.html)


# Modificación librería afipsdk en carpeta Afip_res :
  - archivos wsaa.wsdl y wsfe.wsdl
  - agregar cert y key(luego se generarán en un script),ejemplo:

   `openssl genrsa -out key 2048`

   `openssl req -new -key key -subj "/C=AR/O=India/CN=marzec/serialNumber=CUIT 27290268163" -out cert`

  - Ir al servicio de homologación y completar formulario(para poder acceder cumplir los requisitos previos afip)

  