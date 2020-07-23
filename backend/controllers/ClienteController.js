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

updateCliente :(req,res) => {
  const cliente= Cliente.update({
    id:req.body.id,
    nombre:req.body.nombre,
    cuit:req.body.cuit,
    email:req.body.email
  })
   res.status(200).json(cliente)
},

updateClienteEnLista :(req, res) =>{
  if (req.body.id) {
    const clien = Cliente.build()

    clien.updateAttributes({
      id:req.body.id,
      nombre:req.body.nombre,
      cuit:req.body.cuit,
      email:req.body.email
    })
      .on('success', id => {
        res.json({
          success: true
        }, 200)
      })
      .on('failure', error => {
        throw new Error(error)
      })
  }
  else
    throw new Error('Datos no proporcionados')
},




getClientes :async(req, res,next) => {
    const clientes =await Cliente.findAll()
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de clientes' })
    }else{
      return res.status(200).json( clientes )
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

deleteClienteId: async(req,res)=>{
  var cliente=await Cliente.destroy({
    where:{
      id:req.params.id
    }
  })
  if(![req.body.values]){
    res.status(400).json({err:'No hay cliente con ID'})
  }else{
   res.status(200).json('Eliminada cliente con ID ')
  }
},























  
}









