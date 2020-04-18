## ** Backend: **
***

### Servidor:

***

### Persistencia:

~ Mysql-Nodejs->
(baseDeDatos!)[https://www.mysqltutorial.org/mysql-nodejs/connect/]


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
