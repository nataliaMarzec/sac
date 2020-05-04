const express = require('express')
const router = new express.Router;
const controllerEmpresa = require('../controllers/EmpresaController')
const controllerCliente = require('../controllers/ClienteController')

console.log("--------SOY ROUTER---------"); 


router.get('/hola',(req,res)=>res.send('ok'));
router.post('/empresas/nuevo',(controllerEmpresa.createEmpresa))
router.get('/empresas',(controllerEmpresa.getEmpresas))
router.get('/empresas/:id',(controllerEmpresa.getEmpresaId))
router.delete('/empresas/:id',(controllerEmpresa.deleteEmpresaId))




router.post('/clientes/nuevo',(controllerCliente.createCliente))
router.get('/clientes',(controllerCliente.getClientes))
router.get('/clientes/:id',(controllerCliente.getClienteId))
router.delete('/clientes/:id',(controllerCliente.deleteClienteId))

















module.exports =router
