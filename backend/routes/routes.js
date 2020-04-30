const express = require('express')
const router = new express.Router;
const empresaController = require('../controllers/EmpresaController')







console.log("-------------------ROUTER----------------")


router.get('/hola',(req,res)=>res.send('ok'));
router.post('/',(req,res)=>res.send(empresaController.createEmpresa));
router.get('/empresas',(req,res)=>res.send(empresaController.getEmpresas));



















module.exports =router
