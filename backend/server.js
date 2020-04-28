const express = require('express')
const bodyParser = require('body-parser')
var debug = require('debug')('express-sequelize');
var db=require("./models/sequelizeConnection.js");
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.set('port',process.env.PORT||3001);
server.use('/api/routes', require('./routes/routes'))


// db.sequelize.sync().then(() => {
  server.listen(server.get('port'),()=> {
  (`Express listening on port ${server.get('port')}`);
  
  });
// });





// var express = require('express');
// var Sequelize = require('sequelize');
// bodyParser = require("body-parser");
// cors = require("cors")
// var morgan= require("morgan");
// var path = require("path");
// var debug = require('debug')('express-sequelize');
// var db=require("./models/sequelizeConnection.js");
// // var routers = require('./routers/routers');
// const controller = require('./controllers/EmpresaController')


// var server= express();
// server.use(bodyParser.json());
// server.use(morgan(`dev`));
// server.set('port',process.env.PORT||3001);
// // const db = require("../models");
// server.set(controller);

// server.get("/", (req, res) => res.send('APP UP'));


// server.use(cors());

// server.post('/create',controller.createEmpresa);
// server.get('/empresas',controller.getEmpresas);

// console.log("AQUI SERVER:",path.join(__dirname,`server`));



// db.sequelize.sync().then(() => {
//   server.listen(server.get('port'),()=> {
//   debug(`Express listening on port ${server.get('port')}`);
  
//   });
// });


exports.server=server
