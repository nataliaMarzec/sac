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


  // getEmpresas :(req, res,next) => {
  // try {
  //   const empresas = Empresas.findAll()

  //   res.status(200).json( empresas )
  //   // return res.status(200);
  // } catch (err) {
  //   if(![req.body.values]){
  //   res.status(400).json({ err:'no obtiene lista de empresas' })
  //   }
  //   }
  // },
//   getEmpresaById :async (req, res) => {
//   try {
//     const empresa = await Empresa.findById(req.params.id)

//     res.status(200).json({ empresa })
//   } catch (err) {
//     res.status(400).json({ err })
//   }
// }
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









