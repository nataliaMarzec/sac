const express = require('express');
var Sequelize = require('sequelize');
bodyParser = require("body-parser");
cors = require("cors")
var path = require("path");
var debug = require('debug')('express-sequelize');
const {sequelize}=require('./models/sequelizeConnection')
const server= express();

server.use(bodyParser.json());
server.use(require ('./routes/routes.js'));
server.set('port',process.env.PORT || 3004);
server.get("/", (req, res) => res.send('APP UP'));
server.use(cors());

console.log("AQUI SERVER:",path.join(__dirname,`server`));
server.use("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


sequelize.sync().then(() => {
  server.listen(server.get('port'),()=> {
  debug(`Express listening on port ${server.get('port')}`);
  
  });
});


exports.server=server
