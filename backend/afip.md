 # Se usará la siguiente librería:
   [Afip.js](https://github.com/nataliaMarzec/afip.js)

   [node-soap](https://www.npmjs.com/package/soap)
   
   
 # Instalar :

  instalación para afip aqui:

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

## El servicio que se usa es DUMMY(Monitoreo)/wsfe(facturaElectrónica):
- id:dummy descripción: monitoreo
(dummy)[https://wsaahomo.afip.gov.ar/test/]

- id:wsfe   descripción:factura electrónica  
(facturacionElectronica)[https://wswhomo.afip.gov.ar/wsfe/service.asmx]

- id:wsfeca	descripción:factura electrónica CAE
(facturaElectrónicaCAE)[https://fwshomo.afip.gov.ar/wsfeca/services/FECAService]


## DESDE HOMOLOGACIÓN AFIP:
# TAREAS QUE SE PUEDEN HACER EN ESTE SITIO
En este sitio los programadores de aplicaciones pueden solicitar acceso a los diversos webservices (denominados "servicios") que están disponibles en el ambiente de testing/homologación de la AFIP. No son de aplicación para el ambiente de Producción.

Para poder acceder a un servicio, la aplicación a programar debe utilizar un certificado de seguridad, que se obtiene en este sitio. Entre otras cosas, el certificado contiene un Distinguished Name (DN) que incluye una CUIT. Cada DN será identificado por un "alias" o "nombre simbólico", que actúa como una abreviación.

Autoservicio de certificados
Para obtener el certificado, distinguimos dos casos según si el DN ya fué dado de alta (DN existente) o si aún no existe. Según sea el caso, utilice uno de los formularios siguientes:

Formulario para obtener el certificado por primera vez
Formulario para obtener otro certificado adicional (para un DN existente)
Tareas relacionadas:
Ver los certificados emitidos para una CUIT
Gestión de accesos a servicios
Una vez generado el DN y obtenido el certificado, se puede solicitar autorización de acceso a los servicios de AFIP.

Ver el catálogo de servicios disponibles
Formulario de solicitud de autorización de acceso a servicio
Tareas relacionadas:
Formulario para eliminar una autorización de acceso a servicio
Delegación de representación
Una vez obtenido el certificado, se puede delegar la representación mediante la opción del menú Crear autorización a servicio, donde en la opción “CUIT representado” se debe colocar el cuit a representar y además se debe seleccionar el Servicio deseado.

CÓMO GENERAR UNA SOLICITUD DE CERTIFICADO (CSR)
Para obtener el certificado por primera vez, hay que dar de alta al DN. Para esto hay que presentar una "solicitud de certificado" o "Certificate Signing Request" (CSR).

El CSR se genera en su computadora, usando la herramienta OpenSSL (disponible para Windows, UNIX/Linux y MacOSX). Se hace en dos pasos

primero hay que generar una clave privada en formato PKCS#10 con un mínimo de 2048 bits
openssl genrsa -out MiClavePrivada 2048

y segundo, generar el CSR. Para ello, la forma de ejecutar 'openssl' en la línea de comandos es así:
openssl req -new -key MiClavePrivada -subj "/C=AR/O=subj_o/CN=subj_cn/serialNumber=CUIT subj_cuit" -out MiPedidoCSR

donde hay que reemplazar

MiClavePrivada por nombre del archivo elegido en el primer paso.
subj_o por el nombre de su empresa
subj_cn por el nombre de su sistema cliente
subj_cuit por la CUIT (sólo los 11 dígitos, sin guiones) de la empresa o del programador (persona jurídica)
MiClavePrivada por el nombre del archivo de la clave privada generado antes
MiPedidoCSR por el nombre del archivo CSR que se va a crear
Por ejemplo para
una empresa llamada EmpresaPrueba
un sistema TestSystem
el cuit = 20123456789
con el archivo MiClavePrivada generado en el punto anterior:
openssl req -new -key MiClavePrivada -subj "/C=AR/O=EmpresaPrueba/CN=TestSystem/serialNumber=CUIT 20123456789" -out MiPedidoCSR

Si no hay errores, el archivo 'MiPedidoCSR' será utilizado al momento de obtener el DN y el certificado.
PARA MAS INFORMACIÓN
Referirse a www.afip.gob.ar/ws
ENLACES EXTERNOS DE INTERÉS
Sitio web para descargar OpenSSL
Estándares de criptografía de clave pública
Certificados X.509

# Inconvenientes que se produjeron:
 
(Diffie-Hellman)[https://weakdh.org/]

(node:32811) UnhandledPromiseRejectionWarning: Error: Error getting Token Autorization Error: write EPROTO 139734064777024:error:141A318A:SSL routines:tls_process_ske_dhe:dh key too small:../ssl/statem/statem_clnt.c:2149:

    at CreateServiceTA.catch.err (/home/natim/Escritorio/sac3/sac/backend/node_modules/@afipsdk/afip.js/src/Afip.js:160:9)
(node:32811) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:32811) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

  ## posible solución:

(problema cifrado node)[https://nodejs.dokry.com/5874/nodo-js-error-openssl-clave-dh-demasiado-pequena.html]

´node --tls-cipher-list="EXP-EDH-RSA-DES-CBC-SHA" server.js´

´npm install openssl-nodejs´(usada)