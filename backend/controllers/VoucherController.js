var {Op} = require('sequelize');
const {Voucher} = require('../models/sequelizeConnection.js')
// const {Cliente} = require('../models/sequelizeConnection.js')
// const Afip = require('@afipsdk/afip.js');
var faker = require('faker');

console.log("--------------CONTROLLER Voucher----------------")

module.exports={    

// date = new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000)).toISOString().split('T')[0],
// date:(req,res)=>{faker.date.past()},

// afip:(req,res)=>{
//       const afip=Afip.create({
//          cuit:'27290268163'
//       })
//       res.status(200).json(afip)
// },
// afip=Afip.create({cuit:'27290268163'}),
    
data:(req,res)=>{
      const voucher= Voucher.create({
      // const voucherDatos={
        id:req.body.id,
        cantidadComprobantesARegistrar :req.body.cantidadComprobantesARegistrar,
        puntoVenta:req.body.puntoVenta,
        comprobanteTipo:req.body.comprobanteTipo,
        concepto:req.body.concepto,
        tipoDocumento:req.body.tipoDocumento,
        nroDocumento:req.body.nroDocumento,
        comprobanteDesde:req.body.comprobanteDesde,
        comprobanteHasta:req.body.comprobanteHasta,
        comprobanteFecha:req.body.comprobanteFecha,
        importeTotal:req.body.importeTotal,
        ImporteNetoNoGravado:req.body.ImporteNetoNoGravado,
        importeNetoGravado:req.body.importeNetoGravado,
        importeExentoIva:req.body.importeExentoIva,
        importeIva:req.body.importeIva,
        importeTributos:req.body.importeTributos,
        fechaServDesde:req.body.fechaServDesde,
        fechaServHasta:req.body.fechaServHasta,
        FechaVtoPago:req.body.FechaVtoPago,
        tipoMoneda:req.body.tipoMoneda,
        monotizacionMoneda:req.body.monotizacionMoneda
      // CbtesAsoc 	: [ // (Opcional) Comprobantes asociados
      //   Compradores	: [ // (Opcional) Detalles de los clientes del comprobante 
      //     {
      //       DocTipo	: 80, // Tipo de documento (ver tipos disponibles) 
      //       DocNro		: 20111111112, // Numero de documento
      //       Porcentaje 	: 100 // Porcentaje de titularidad del comprador
      //     }
      //   ]
      // };
      })
       res.status(200).json(voucher);   
//  afip.ElectronicBilling.createVoucher(data).then(res => {console.log("-----NUEVO VOUCHER--",res)})
 
}

// getVouchers :async(req, res,next) => {
//     const vouchers =await Voucher.findAll()
//     if(![req.body.values]){
//     res.status(400).json({ err:'no obtiene lista de vouchers' })
//     }else{
//       return res.status(200).json(vouchers)
//     }
//   },
























  
}