## ** Backend: **
***

### Servidor:

***

### Persistencia:

* MongoDb - Consulta genérica:

(rsqlMongoDb!)[https://gitlab.com/pnieloud/js-get-started/-/blob/master/md/consultas-Genericas-al-Backend.md]
 
° Operaciones Compatibles:
  Igual a: ==
  No es igual a:! =
  Menos de: = lt =
  Menor o igual que: = le =
  Mayor que: = gt =
  Mayor o igual que: = ge =
  En: = en =
  No dentro: = fuera =

 > Se integra en :
   |
   |-> Server.js-> req.query.consulta se usa en browser [!brows][(localhost:8888/productos?consulta=nombre=="ejm")]
              ~~~    
                   if (req.query.consulta) {
                   console.log("Query:" + req.query.consulta) 
                   var Consulta = (req.query.consulta)
                   query = rsqlMongoDB (Consulta)} 
              ~~~                  
                              
   |-> MongoConections.js->  

   |-> MongoHome.js->find reemplaza a all
              ~~~
                   find(query, callback) {
                   this.persistentCollection.find(query).toArray( (error, result)=>{
                   if(error) throw error
                    callback(result)})}
              ~~~

***

### Modelo:

                                              * src:
                          Factura <- Proveedor <-|-> Operacion |->efectivo 
                   pago--|                                     |->Banco->tranfencia
                                                                       |->debito -- nro cuenta
                                                                                 -- datos personales(cuit)
                                                                                 -- cvu cuenta bancaria única
 
                                                                       |->cheque -- _propio_
                                                                                 -- _terceros_
