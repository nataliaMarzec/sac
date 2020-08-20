var {Op} = require('sequelize');
const {Cliente} = require('../models/sequelizeConnection.js')


 
module.exports = {

createCliente :(req,res) => {
     const cliente= Cliente.create({
       id:req.body.id,
       nombre:req.body.nombre,
       cuit:req.body.cuit,
       email:req.body.email
     })
      res.status(200).json(cliente)
},

async create(req, res) {
  const cliente = req.body;

  const { id,nombre,cuit,email } = await Cliente.create(cliente);

  return res.json({
    id,
    nombre,
    cuit,
    email,
  });
},

async update(req, res) {
  const cliente = await Cliente.findByPk(req.params.id);

  const { id,nombre,cuit,email } = await Cliente.update(req.body);

  return res.json({
    id,
    nombre,
    cuit,
    email,
  });
},

async delete(req, res) {
  const cliente = await Cliente.findByPk(req.params.id);

  await cliente.destroy();

  return res.json({ delete: 'Cliente eliminado' });
},


updateCliente :(req,res) => {
  const cliente= Cliente.update({
    id:req.body.id,
    nombre:req.body.nombre,
    cuit:req.body.cuit,
    email:req.body.email
  })
   res.status(200).json(cliente)
},


getClientes :async(req, res,next) => {
  const clientes =await Cliente.findAll()
  if(![req.body.values]){
  res.status(400).json({ err:'no obtiene lista de clientes' })
  }else{
    return res.status(200).json( clientes)
  }
},

getClienteId: async(req,res)=>{
    var cliente =await Cliente.findByPk(req.params.id)
    if(![req.body.values]){
      res.status(400).json({err:'No hay cliente con ID'})
    }else{
    return res.status(200).json(cliente)
    }
},
























  
}









