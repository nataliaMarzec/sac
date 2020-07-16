var Sequelize = require("sequelize");
var connections= require("./.sequelizerc");
const { server } = require("./server");
var faker = require('faker');
const {Empresa,Cliente,Voucher} = require("./models/sequelizeConnection");
// const { facturar, data } = require("./controllers/VoucherController");
const Afip = require('@afipsdk/afip.js');
const ElectronicBilling = require("@afipsdk/afip.js/src/Class/ElectronicBilling");


function initDatos(){
 Empresa.bulkCreate([
    { nombre:'adamkzick', cuit:'22790268163',email:'adamk@gmail.com'},
   
  ]).then(function() {
    return Empresa.findAll();
  }).then(function(emps) {
    console.log(emps);
  });

  Cliente.bulkCreate([
    { nombre: 'Brandon Juarez', cuit: '2322222243',email:'@Brandon' },
    { nombre: 'Daniel Esquivel', cuit: '20302252112',email:'@Daniel' },
   
  ]).then(function() {
    return Cliente.findAll()
  }).then(function(cli) {
    console.log(cli);
  });

  

  Voucher.bulkCreate([
    {cantidadComprobantesARegistrar:'1',
    puntoVenta:'1',
    comprobanteTipo:'6',
    concepto:'1',
    tipoDocumento:'80',
    nroDocumento: '20358853',
    comprobanteDesde:'1',
    comprobanteHasta:'1',
    comprobanteFecha:null,
    importeTotal:'123.40',
    ImporteNetoNoGravado:'0',
    importeNetoGravado:'0',
    importeExentoIva:'0' ,
    importeIva:'23.8',
    importeTributos:'0',
    fechaServDesde:null,
    fechaServHasta:null,
    FechaVtoPago:null,
    tipoMoneda:'PES',
    monotizacionMoneda:'1'
    }

  ]).then(function() {
    return Voucher.findAll();
  }).then(function(vouch) {
    console.log(vouch);
  });
}
//termina init




function facturar(){
    const afip = new Afip({CUIT:27290268163})
   
    const date = new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    console.log(date)

  
    const data = {
      'CantReg' 		: 1, // Cantidad de comprobantes a registrar
      'PtoVta' 		: 1, // Punto de venta
      'CbteTipo' 		: 6, // Tipo de comprobante (ver tipos disponibles) 
      'Concepto' 		: 1, // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
      'DocTipo' 		: 80, // Tipo de documento del comprador (ver tipos disponibles)
      'DocNro' 		: 29026816, // Numero de documento del comprador
      'CbteDesde' 	: 1, // Numero de comprobante o numero del primer comprobante en caso de ser mas de uno
      'CbteHasta' 	: 1, // Numero de comprobante o numero del ultimo comprobante en caso de ser mas de uno
      'CbteFch' 		: parseInt(date.replace(/-/g, '')), // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
      'ImpTotal' 		: 184.05, // Importe total del comprobante
      'ImpTotConc' 	: 0, // Importe neto no gravado
      'ImpNeto' 		: 150, // Importe neto gravado
      'ImpOpEx' 		: 0, // Importe exento de IVA
      'ImpIVA' 		: 26.25, //Importe total de IVA
      'ImpTrib' 		: 7.8, //Importe total de tributos
      'FchServDesde' 	: null, // (Opcional) Fecha de inicio del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      'FchServHasta' 	: null, // (Opcional) Fecha de fin del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      'FchVtoPago' 	: null, // (Opcional) Fecha de vencimiento del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      'MonId' 		: 'PES', //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
      'MonCotiz' 		: 1, // Cotización de la moneda usada (1 para pesos argentinos)  
      'CbtesAsoc' 	: [ // (Opcional) Comprobantes asociados
          {
          'Tipo' 		: 6, // Tipo de comprobante (ver tipos disponibles) 
          'PtoVta' 	: 1, // Punto de venta
          'Nro' 		: 1, // Numero de comprobante
          'Cuit' 		: 2729268163 // (Opcional) Cuit del emisor del comprobante
          }
        ],
      'Tributos' 		: [ // (Opcional) Tributos asociados al comprobante
        {
          'Id' 		:  99, // Id del tipo de tributo (ver tipos disponibles) 
          'Desc' 		: 'Ingresos Brutos', // (Opcional) Descripcion
          'BaseImp' 	: 150, // Base imponible para el tributo
          'Alic' 		: 5.2, // Alícuota
          'Importe' 	: 7.8 // Importe del tributo
        }
      ], 
      'Iva' 			: [ // (Opcional) Alícuotas asociadas al comprobante
        {
          'Id' 		: 5, // Id del tipo de IVA (ver tipos disponibles) 
          'BaseImp' 	: 100, // Base imponible
          'Importe' 	: 21 // Importe 
        }
      ], 
      'Opcionales' 	: [ // (Opcional) Campos auxiliares
        {
          'Id' 		: 17, // Codigo de tipo de opcion (ver tipos disponibles) 
          'Valor' 	: 2 // Valor 
        }
      ], 
      'Compradores' 	: [ // (Opcional) Detalles de los clientes del comprobante 
        {
          'DocTipo' 		: 80, // Tipo de documento (ver tipos disponibles) 
          'DocNro' 		: 20111111112, // Numero de documento
          'Porcentaje' 	: 100 // Porcentaje de titularidad del comprador
        }
      ]
    };
    
  
    afip.ElectronicBilling.createVoucher(data).then(response => {
      console.log("holaaaaaa",response)
    }).catch("fallo afip______");
  
    
    // res['CAE']; //CAE asignado el comprobante
    // res['CAEFchVto']; //Fecha de vencimiento del CAE (yyyy-mm-dd
  
}


module.exports={initDatos,facturar}
