var {Op} = require('sequelize');
const {Usuario} = require('../models/sequelizeConnection.js')


 
module.exports = {

createUsuario :(req,res) => {
     const usuario= Usuario.create({
       id:req.body.id,
       nombre:req.body.nombre,
       cuit:req.body.cuit,
       email:req.body.email
     })
      res.status(200).json(usuario)
},

updateUsuario :(req,res) => {
  const usuario= Usuario.update({
    id:req.body.id,
    nombre:req.body.nombre,
    cuit:req.body.cuit,
    email:req.body.email
  })
   res.status(200).json(usuario)
},


getUsuarios :async(req, res,next) => {
    const usuarios =await Usuario.findAll()
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de usuarios' })
    }else{
      return res.status(200).json( usuarios)
    }
  },



deleteUsuarioId: async(req,res)=>{
  var usuario=await Usuario.destroy({
    where:{
      id:req.params.id
    }
  })
  if(![req.body.values]){
    res.status(400).json({err:'No hay usuario con ID'})
  }else{
   res.status(200).json('Eliminado usuario con ID ')
  }
},























  
}





