var Sequelize = require("sequelize");
var connections= require("./.sequelizerc");
const { server } = require("./server");
var faker = require('faker');
const {Empresa,Cliente,Voucher,Usuario} = require("./models/sequelizeConnection");


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

  Usuario.bulkCreate([
    { nombre:'adamkzick', cuit:'22790268163',email:'adamk@gmail.com'},
   
  ]).then(function() {
    return Usuario.findAll();
  }).then(function(usuarios) {
    console.log(usuarios);
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



module.exports={initDatos}
