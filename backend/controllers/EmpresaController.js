var {Op} = require('sequelize');
const {Empresa} = require('../models/sequelizeConnection.js')


console.log("--------------CONTROLLER----------------")


   
   
 
module.exports = {

createEmpresa :(req,res) => {
     const empresa= Empresa.create({
       id:req.body.id,
       nombre:req.body.nombre,
       cuit:req.body.cuit,
       email:req.body.email
     })
      res.status(200).json(empresa)
},


getEmpresas :async(req, res,next) => {
    const empresas =await Empresa.findAll()
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de empresas' })
    }else{
      return res.status(200).json( empresas )
    }
  },


getEmpresaId: async(req,res)=>{
    var empresa =await Empresa.findByPk(req.params.id)
    if(![req.body.values]){
      res.status(400).json({err:'No hay empresa con ID'})
    }else{
    return res.status(200).json(empresa)
    }
},


deleteEmpresaId: async(req,res)=>{
  var empresa =await Empresa.destroy({
    where:{
      id:req.params.id
    }
  })
  if(![req.body.values]){
    res.status(400).json({err:'No hay empresa con ID'})
  }else{
   res.status(200).json('Eliminada empresa con ID ')
  }
}




// exports.createEmpresa = async (req,res)=>{
//    Empresa.create({ nombre: 'loli', cuit: '235556612',email:'@loli' })
//   .success(function(){
//     Empresa
//     .findOrCreate({ nombre: 'loli' }, { cuit: '235556622',email:'@loli' })
//     .success(function(emp,created){
//       console.log(emp.values)
//       console.log(created)
//     })
//   })
// }


  
}









