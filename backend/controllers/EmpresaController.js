var {Sequelize,Op,Model} = require('sequelize');
// const { sequelize } = require('./models')
var db=require("../models/sequelizeConnection.js");
const Empresa = require('../models/Empresa');
const Cliente = require('../models/Cliente');
// const Proveedor = require('../models').Proveedor


exports.createEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.beforeBulkCreate(req.body)
    
    res.status(200).json({ empresa })
  } catch (err) {
    res.status(400).json({ err:'no crea Empresa'})
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
// exports.db.Clientes.bulkCreate([
   
//     { nombre: 'Daniel Esquivel', cuit: '20302252112',email:'@Daniel' },
   
//   ]).then(function() {
//     return db.Clientes.findAll()
//   }).then(function(cli) {
//     console.log(cli);
//   });


exports.getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll()

    res.status(200).json({ empresas })
  } catch (err) {
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de empresas' })
    
    }
  }
}

// exports.getEmpresaById = async (req, res) => {
//   try {
//     const empresa = await Empresa.findById(req.params.id)

//     res.status(200).json({ empresa })
//   } catch (err) {
//     res.status(400).json({ err })
//   }
// }





 
// server.post('/empresas', function(req, res) {
//   Empresa.create({ nombre: req.body.nombre, cuit: req.body.cuit,email: req.body.email })
//   .then(function(empresa
//     ) {
//     res.json(empresa);
//   });
// });





// exports.createTask = async (req, res) => {
//   try {
//     sequelize.transaction(async transaction => {
//       const task = await Task.create(
//         { ...req.body, userId: req.params.userId },
//         { include: [User], transaction }
//       )

//       const userTask = await UserTask.create(
//         {
//           userId: req.params.userId,
//           taskId: task.id,
//           status: req.body.status
//         },
//         { include: [User, Task], transaction }
//       )

//       res.status(200).json({ task, userTask })
//     })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// }

// exports.getUserTasks = async (req, res) => {
//   try {
//     const tasks = await Task.findAll(
//       { where: { userId: req.params.userId } },
//       { include: [User] }
//     )

//     res.status(200).json({ tasks })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// }

// exports.getUserTaskById = async (req, res) => {
//   try {
//     const task = await Task.findOne(
//       { where: { userId: req.params.userId, id: req.params.taskId } },
//       { include: [User] }
//     )

//     res.status(200).json({ task })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// }
