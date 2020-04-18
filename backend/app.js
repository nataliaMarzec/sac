/* Initialize Sequelize */
let mysql= "mysql"
server = require("./server")
// config = require("./config/config.json")
sqlConnection = require("./src/database/sqlConnection.js")
var Sequelize = require("sequelize");
// var sequelize = new Sequelize(config);
 

const errHandler = err => {
    console.error("Error: ", err);
  };
sqlConnection.connect((db)=>{
let empresa =await server.create({id_empresa:'id_empresa',nombre_empresa:'Magnolia.sa',cuit_empresa
:'27-24555321-3' ,email_empresa:'magnolia@gmail.com'}).catch(errHandler);
let id=server.create(empresa);


  



// server.register(user,id);
server.init();
console.log("server init desde app.js");

})
