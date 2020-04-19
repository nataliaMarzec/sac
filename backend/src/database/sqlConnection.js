// Para almacenar el codigo que se encuentra en el servidor
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const path = require('path');



// const {DATABASE_NAME,USERNAME,PASSWORD,HOST,DIALECT} =require('./constantes')
const db = {};

                
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.PASSWORD, {
const sequelize = new Sequelize('sac','adm','Sistema_ac20', {

  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  
});
sequelize.authenticate()
 .then(() => {
   console.log('La conexión se ha establecido con exito');
 })
 .catch(err => {
   console.error('No se puede conectar a la base de datos:', err);
 });
//en caso de querer cerrar la sesión:
//  sequelize.close();

 sequelize.sync({ force: true })
  .then(() => {
    console.log(`Base de datos y tablas creadas!`)
  })

 

// Sequelize representa una conexión a una base de datos.
//Sequelize se refiere a la biblioteca en sí y sequelize a una instacia de Sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;






//Modelos/tables
db.Empresas = require('../modelo/Empresa.js')(sequelize, Sequelize);

module.exports = db;
module.exports = sequelize;
global.sequelize = sequelize;
module.exports=Sequelize;
module.exports=db.Empresas;


// let SequelizeAuto = require('sequelize-auto')
// module.exports = function(config, callback) {
//   // const {database, username, password, ...options} = config; //syntactic not support
//   let auto = new SequelizeAuto(config.database, config.username, config.password, config);

//   auto.run(function(err){
//     if (err) throw err;
//     callback(auto)
//   })
// }
