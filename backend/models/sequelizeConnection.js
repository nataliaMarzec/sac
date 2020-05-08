'use strict'

const Sequelize = require('sequelize');
const EmpresaModel = require('../models/Empresa');
const ClienteModel=require('../models/Cliente');
const FacturacionModel=require('../models/Facturacion')


const DBURL='mysql://adm:Sistema_ac20@localhost:3306/sac'
let sequelize=new Sequelize(DBURL,{
   operatorsAliases:'false',
    pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

var models={}
models=sequelize
models=Sequelize

const Cliente= ClienteModel(sequelize,Sequelize);
const Empresa=EmpresaModel(sequelize,Sequelize);
const Facturacion=FacturacionModel(sequelize,Sequelize);




// let SequelizeAuto = require('sequelize-auto')
// module.exports = function(config, callback) {
//   const sequelize = new SequelizeAuto('sac','adm','Sistema_ac20', config);

//   sequelize.run(function(err){
//     if (err) throw err;
//     callback(sequelize)
//   })
// }


sequelize.authenticate()
 .then(() => {
   console.log('BASE_DE_DATOS_CONECTADA!!');
 })
 .catch(err => {
   console.error('ERROR,_BD_NO_CONECTADA:', err);
 });


//en caso de querer cerrar la sesión:
//  sequelize.close();


sequelize.sync()
  .then(() => {
    console.log(`Base de datos y tablas creadas, modelos sincronizados!`)
    console.log("SOY CLIENTE SYNC:",Cliente=== sequelize.models.Cliente); 
    console.log("SOY EMPRESA SYNC:",Empresa === sequelize.models.Empresa); 
    console.log("SOY FACTURACION SYNC",Facturacion ===sequelize.models.Facturacion)
    

  })

  // Empresas.bulkCreate([
  //   { nombre: 'magna', cuit: '2322222223',email:'@magna' },
  //   { nombre: 'Pluma', cuit: '2322223343',email:'@pluma' },
   
  // ]).then(function() {
  //   return Empresas.findAll();
  // }).then(function(emps) {
  //   console.log(emps);
  // });

    // Clientes.bulkCreate([
  //   { nombre: 'Brandon Juarez', cuit: '2322222243',email:'@Brandon' },
  //   { nombre: 'Daniel Esquivel', cuit: '20302252112',email:'@Daniel' },
   
  // ]).then(function() {
  //   return Clientes.findAll()
  // }).then(function(cli) {
  //   console.log(cli);
  // });
 



module.exports = {
  sequelize,
  Cliente,
  Empresa,
  Facturacion

};



