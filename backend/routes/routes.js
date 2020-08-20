const express = require('express')
const router = new express.Router;
// const Afip = require('@afipsdk/afip.js');
const controllerEmpresa = require('../controllers/EmpresaController');
const controllerCliente = require('../controllers/ClienteController');
// const controllerVoucher = require('../controllers/VoucherController')
// const {facturar}= require('../initDatos')
const controllerUsuario=require('../controllers/UsuarioController')
const controllerChofer=require('../controllers/ChoferController')
console.log("--------SOY ROUTER---------"); 


router.get('/hola',(req,res)=>res.send('ok'));
router.post('/empresas/nuevo',(controllerEmpresa.createEmpresa))
router.get('/empresas',(controllerEmpresa.getEmpresas))
router.get('/empresas/:id',(controllerEmpresa.getEmpresaId))
router.delete('/empresas/:id',(controllerEmpresa.deleteEmpresaId))
// router.put('/clientes/:id',controllerCliente.updateEmpresa)



router.post('/clientes',(controllerCliente.createCliente))
router.get('/clientesLista',(controllerCliente.getClientes))
router.get('/clientes/:id',(controllerCliente.getClienteId))
router.delete('/clientes/:id',(controllerCliente.deleteClienteId))
router.put('/clientes/:id',controllerCliente.updateCliente)
router.put('/clientes',(controllerCliente.updateClienteEnLista))

router.post('/choferes',(controllerChofer.create))
router.delete('/choferes/:id',(controllerChofer.delete))
router.put('/choferes/:id',controllerChofer.update)
router.get('/choferes',(controllerChofer.getChoferes))



// router.post('/voucher',(req,res)=> res.send(controllerVoucher.facturar))
// router.post('/facturas',(req,res)=>{facturar();res.send("ok")})
// console.log(facturar)
// router.post('/factu',(req,res)=>{facturarElec();res.send("oki-post")})
// router.get('/factu',(req,res)=>{facturarElec();res.send("oki-get")})

// router.post('/vouchers',(req,res)=>{voucher;res.send("oki-post")})
// router.get('/vouchers',(req,res)=>{voucher;res.send("oki-get")})

router.post('/usuarios',(controllerUsuario.createUsuario))
router.get('/usuarios',(controllerUsuario.getUsuarios))
// router.get('/usuarios/:id',(controllerUsuario.getUsuarioId))
router.delete('/usuarios/:id',(controllerUsuario.deleteUsuarioId))
router.put('/usuarios/:id',controllerUsuario.updateUsuario)
// router.put('/usuarios',(controllerUsuario.updateUsuarioEnLista))








module.exports =router
