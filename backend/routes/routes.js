const express = require('express')
const router = new express.Router;
const empresaController = require('../controllers/EmpresaController')


// router
//   .post('/:create',controller.createEmpresa)
//   .get('/:empresas/',controller.getEmpresas)
// router.use('/create',post(empresaController.createEmpresa))
router.get('/empresas',(req,res)=>res.send(empresaController.getEmpresas));
router.get('/hola',(req,res)=>res.send('ok'));


// server.post("/", empresas.create);
// server.get("/empresasActivadas", clientes.findAllActivadas);
// server.get("/:id", empresas.findOne);
// server.put("/:id", empresas.update);
// server.delete("/:id", clientes.delete);
// server.delete("/", clientes.deleteAll);
// router.get("/",contrEmpresa.findAll());

// router.route('/:id').get(EmpresaController.getEmpresaById)

// router
//   .route('/:userId/tasks')
//   .post(UserController.createTask)
//   .get(UserController.getUserTasks)

// router.route('/:userId/tasks/:taskId').get(UserController.getUserTaskById)

module.exports =router
