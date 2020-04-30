const express = require('express');
var Sequelize = require('sequelize');
bodyParser = require("body-parser");
cors = require("cors")
var path = require("path");
var debug = require('debug')('express-sequelize');
var db=require("./models/sequelizeConnection.js");
// var router =require('express-promise-router')();


const server= express();
server.use(bodyParser.json());


server.use(require ('./routes/routes.js'));

server.set('port',process.env.PORT || 3001);

server.get("/", (req, res) => res.send('APP UP'));

server.use(cors());

console.log("AQUI SERVER:",path.join(__dirname,`server`));

db.sequelize.sync().then(() => {
  server.listen(server.get('port'),()=> {
  debug(`Express listening on port ${server.get('port')}`);
  
  });
});


exports.server=server
