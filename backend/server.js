require("./src/database/sqlConnection.js");
var Sequelize = require('sequelize');
express = require("express");
var server= express();
bodyParser = require("body-parser");
cors = require("cors")
var morgan= require("morgan");
server= server.use(morgan(`dev`));
var path = require("path");
// module.exports.empresa =db.empresas;


// var daos = {}


// function init(){
  server.set('port',process.env.PORT||3001)
  //files static
  console.log("AQUI PUBLIC:",path.join(__dirname,`public`));
  server.use(express.static(path.join(__dirname,`public`)));
  server.use(express.json());
  server.use(cors());
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended:true}));
  

  





const router = express.Router();
server.use(router);

const rootPath = path.resolve("./api");
server.use(express.static(rootPath));

server.use((err,req,res,next)=>{
if(err){
//handle file type and max size of image
return res.send(err.message);
}
});




  server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
  });

// }

// exports.init=init;
exports.server=server







