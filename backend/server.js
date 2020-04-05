express = require("express");
bodyParser = require("body-parser");
cors = require("cors")
var server= express();
var morgan= require("morgan");
server= server.use(morgan(`dev`));
var path = require("path");
var homes = {}

function register(home) {
  console.log(` registering handlers for ${home.type}`)
  homes[home.type] = home 
}

function init() {
  server.set('port',process.env.PORT||8889)
  //files static
  console.log("AQUI PUBLIC:",path.join(__dirname,`public`));
  server.use(express.static(path.join(__dirname,`public`)));
  server.use(express.json())
  server.use(cors())

 
  server.use("(/:type/*)|(/:type)", (req, res, next) => {
      if (!homes[req.params.type]) {
          console.log(` home de ${req.params.type} no existe`  )
          res.status(404).end()
      }
      else {
        console.log(` home de ${req.params.type} si existe `  )
        next()
      }
  })
  
  const connection = dbConnection();

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM proveedores', (err, result) => {
      res.render('proveedores/proveedores', {
        news: result
      });
    });
  });

//   server.post('/proveedores', (req, res) => {
//     const { nombre, direccion,observacion } = req.body;
//     connection.query('INSERT INTO proveedores SET ? ',
//       {
//         nombre,
//         direccion,
//         observacion
//       }
//     , (err, result) => {
//       res.redirect('/proveedores');
//     });
//   });
// };


  server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
  });


exports.init = init;
exports.register = register;

//VER https://developer.mozilla.org/es/docs/Web/HTTP/Methods



// const app = express();

// // settings
// app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../app/views'));
// // middlewares
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, '../static')))

// module.exports = app;