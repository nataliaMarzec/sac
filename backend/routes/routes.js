const express = require('express')
const router = new express.Router;
const controllerEmpresa = require('../controllers/EmpresaController')


console.log("--------SOY ROUTER---------"); 


router.get('/hola',(req,res)=>res.send('ok'));
router.post('/empresas/nuevo',(controllerEmpresa.createEmpresa))


// router.get('/empresas',(req,res)=>{
//     res.send('GET /empresas')
//     console.log("aqui empresas")
// })

















module.exports =router
