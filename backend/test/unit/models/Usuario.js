const { expect } = require('chai')
 
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists 
} = require('sequelize-test-helpers')
 
const UsuarioModel = require('../../src/models/Usuario.js')
 
describe('src/models/Usuario', () => {
  const Usuario = UsuarioModel(sequelize, dataTypes)
  const usuario= new Usuario()
 
  checkModelName(User)('User')
 
  context('properties', () => {
    ;['nombre', 'cuit', 'email'].forEach(
      checkPropertyExists(usuario)
    )
  })
 
//   context('associations', () => {
//     const Empresa = 'some dummy company'
 
//     before(() => {
//       Usuario.associate({ Empresa })
//     })
 
//     it('defined a belongsTo association with Company', () => {
//       expect(Usuario.belongsTo).to.have.been.calledWith(Empresa)
//     })
//   })
 
//   context('indexes', () => {
//     ;['email', 'token'].forEach(checkUniqueIndex(usuario))
//   })
})