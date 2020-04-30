const express = require('express')
const router = new express.Router;
const empresaController = require('../controllers/EmpresaController')








router.get('/hola',(req,res)=>res.send('ok'));
router.post('/',(req,res)=>res.send(empresaController.createEmpresa));
router.get('/empresas',(req,res)=>res.send(empresaController.getEmpresas));
// router.get('/empresas/:id',(req,res)=>res.send(empresaController.getEmpresaById))
// router.get('/empresas/:id',(req,res)=>res.send(empresaController.getEmpresas));
// router.get('/empresas/:id',(req,res)=>res.send(empresaController.getEmpresas));
// router.get('/empresas/:id',(req,res)=>res.send(empresaController.getEmpresas));
// router.get('/empresas',(req,res)=>res.send(empresaController.getEmpresas));
// router.get('/empresas',(req,res)=>res.send(empresaController.getEmpresas));


// server.get("/empresasActivadas", clientes.findAllActivadas);
// server.get("/:id", empresas.findOne);
// server.put("/:id", empresas.update);
// server.delete("/:id", clientes.delete);
// server.delete("/", clientes.deleteAll);
// router.get("/",contrEmpresa.findAll());
// router('/:id').get(EmpresaController.getEmpresaById)
//   .route('/:empresas/:id/clientes')
//   .post(controllerEmpresa.createCliente)
//   .get(controllerEmpresa.getClientesDeEmpresa)
// router.route('/:empresas/:id/clientes/:cliente/:id').get(EmpresaController.getClienteByIddeEmpresa)
















module.exports =router
