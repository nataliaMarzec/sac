var {Sequelize,Op,Model} = require('sequelize');
// const { sequelize } = require('./models')
var db=require("../models/sequelizeConnection.js");
const Empresa = require('../models/Empresa');
const Cliente = require('../models/Cliente');
// const Proveedor = require('../models').Proveedor


console.log("--------------CONTROLLER----------------")

module.exports = {

  createEmpresa :(req, res) => {
  try {
    const empresa = Empresa.create(req.body)
   
    .then(res.status(200).json(empresa))
    
  } catch (err) {
    res.status(400).json({ err:'no crea Empresa'})
  }
},



  
  getEmpresas :(req, res,next) => {
  try {
    const empresas = Empresa.findAll()

    res.status(200).json( empresas )
    // return res.status(200);
  } catch (err) {
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de empresas' })
    }
    }
  },
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









