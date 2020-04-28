'use strict'
const fs=require('fs');
// const Sequelize = require[("sequelize"),( __dirname + "/ lib / sequelize / index" )];
const env = process.env.NODE_ENV || 'development';
const path = require('path');
const config = require(__dirname + '/../config/config.json')[env];
var basename  = path.basename(__filename);
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');


let sequelize = new Sequelize('sac','adm','Sistema_ac20', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// let SequelizeAuto = require('sequelize-auto')
// module.exports = function(config, callback) {
//   const sequelize = new SequelizeAuto('sac','adm','Sistema_ac20', config);

//   sequelize.run(function(err){
//     if (err) throw err;
//     callback(sequelize)
//   })
// }
var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate()
 .then(() => {
   console.log('BASE_DE_DATOS_CONECTADA!!');
 })
 .catch(err => {
   console.error('ERROR,_BD_NO_CONECTADA:', err);
 });



 //en caso de querer cerrar la sesión:
//  sequelize.close();

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//en caso de querer cerrar la sesión:
//  sequelize.close();


//Modelos/tables
db.Clientes= require('./Cliente.js')(sequelize,Sequelize);
db.Empresas = require('./Empresa.js')(sequelize,Sequelize);
// db.Proveedores= require('../modelo/Proveedor.js')(sequelize,Sequelize);


  // db.Empresas.bulkCreate([
  //   { nombre: 'magna', cuit: '2322222223',email:'@magna' },
  //   { nombre: 'Pluma', cuit: '2322223343',email:'@pluma' },
   
  // ]).then(function() {
  //   return db.Empresas.findAll();
  // }).then(function(emps) {
  //   console.log(emps);
  // });

  // db.Clientes.bulkCreate([
  //   { nombre: 'Brandon Juarez', cuit: '2322222243',email:'@Brandon' },
  //   { nombre: 'Daniel Esquivel', cuit: '20302252112',email:'@Daniel' },
   
  // ]).then(function() {
  //   return db.Clientes.findAll()
  // }).then(function(cli) {
  //   console.log(cli);
  // });


sequelize.sync({force: false})
  .then(() => {
    console.log(`Base de datos y tablas creadas, modelos sincronizados!`)
  })




module.exports = {
  sequelize,
  db,
  

};
module.exports={ Sequelize ,Op,Model,DataTypes}
module.exports=db.Empresas;
module.exports=db.Clientes;
