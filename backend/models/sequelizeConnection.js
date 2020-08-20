'use strict'

const Sequelize = require('sequelize');
const EmpresaModel = require('./Empresa');
const ClienteModel=require('./Cliente');
const FacturaModel=require('./factura');
const VoucherModel = require('./voucher');
const UsuarioModel= require('./Usuario');
const ChoferModel=require('./Chofer');

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
const Empresa= EmpresaModel(sequelize,Sequelize);
const Factura= FacturaModel(sequelize,Sequelize);
const Voucher= VoucherModel(sequelize,Sequelize);
const Usuario = UsuarioModel(sequelize,Sequelize)
// const Domicilio= domicilio(sequelize,Sequelize);
const Chofer = ChoferModel(sequelize,Sequelize);
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


//  sequelize.close();
//  sequelize.sync({force:true}).then(()=>{console.log("forzando eliminación de datos!!")})

sequelize.sync()
  .then(() => {
    console.log(`Base de datos y tablas creadas, modelos sincronizados!`)
    console.log("SOY CLIENTE SYNC:",Cliente=== sequelize.models.Cliente); 
    console.log("SOY EMPRESA SYNC:",Empresa === sequelize.models.Empresa); 
    console.log("SOY VOUCHER SYNC:",Voucher===sequelize.models.Voucher)
    console.log("SOY USUARIO SYNC:",Usuario===sequelize.models.Usuario)
    
  })





module.exports = {
  sequelize,
  Cliente,
  Empresa,
  Factura,
  Voucher,
  Usuario,
// Domicilio
  Chofer
};



