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


// function init(){


server.post("/:empresa",(req,res)=>{
  var object = res.send(POST, '/empresas/empresa');
  res.json(object),
  res.end()
}),

server.get("/:type/", (req, res) => {
  var allObjects=res.send('GET /empresas');
  res.json(allObjects),
  console.log(req.body)
  res.end() 
})       

server.get("/empresas/:id", (req, res) => {
    res.send('GET /empresas/:id');
}),

server.put("/:type/:id",(req,res)=>{
  res.send('PUT /empresas/:id');
}),

server.delete("/:type/:id",(req,res)=>{
  res.send('DELETE /empresas/:id');
}),




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

const rootPath = path.resolve('path',"(/:type/*)|(/:type)");
server.use(express.static(rootPath));

// server.use((err,req,res,next)=>{
// if(err){
// //handle file type and max size of image
// return res.send(err.message);
// }
// });

//   server.use("(/:type/*)|(/:type)", (req, res, next) => {
//     if (!homes[req.params.type]) {
//         console.log(` home de ${req.params.type} no existe`  )
//         res.status(404).end()
//     }
//     else {
//       console.log(` home de ${req.params.type} si existe `  )
//       next()
//     }
// })






  server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
  });

// }

// exports.init=init;
exports.server=server







