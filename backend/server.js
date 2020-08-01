const express = require('express');
var Sequelize = require('sequelize');
bodyParser = require("body-parser");
cors = require("cors")
var path = require("path");
var debug = require('debug')('express-sequelize');
const {sequelize}=require('./models/sequelizeConnection');
const server= express();
const{initDatos}=require('./initDatos.js')
const soap = require('soap');
// const Afip = require('@afipsdk/afip.js');
// const openssl = require('openssl-nodejs')
// const tls = require('tls');
// import Afip from '@afipsdk/afip.js'


server.use(cors());
server.use(bodyParser.json());
// server.use(Afip);
// server.use(openssl);
server.use(require ('./routes/routes.js'));
// server.use(initDatos)
server.set('port',process.env.PORT ||8008);
server.get("/", (req, res) => res.send('APP UP'));


console.log("AQUI SERVER:",path.join(__dirname,`server`));
// console.log("CIFRADOS------:",server.use(tls.getCiphers));

sequelize.sync({force:true})
// sequelize.sync()
.then(() => {console.log(`--modelos sincronizados!!!--`)})
.then(()=>{initDatos()})
.then(() => {
  server.listen(server.get('port'),()=> {
  debug(`Express listening on port ${server.get('port')}`);
  // console.log("--CONECCIONES--",server.connections)
  });
});




exports.server=server
