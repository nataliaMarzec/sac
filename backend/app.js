server = require("./server")
sqlConnect = require("./src/node-mysql/connect")

sqlConnect.connect( (db) => {

    ProveedorHome = new Home ("u",db)
    // ProveedorHome.insert({"nombre":"Sofía","direccion":"Wanderlust"});

    server.register(ProveedorHome)
  
    server.init();
    console.log("server init desde app.js");
})
// applicationCache

// var myObject = {
//     "nombre": "Merlina", 
//     "direccion": "Wanderlust"}
 