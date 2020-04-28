const express = require('express')
const router = express.Router()
const empresaController = require('../controllers/EmpresaController')


// router
//   .post('/:create',controller.createEmpresa)
//   .get('/:empresas/',controller.getEmpresas)
router
router.route('/:create').post(empresaController.createEmpresa)
router.route('/:empresas').get(empresaController.getEmpresas)


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
