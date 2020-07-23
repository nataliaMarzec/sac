'use strict';
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
const {Empresa,Cliente,Usuario} = require('./sequelizeConnection');



module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:Sequelize.INTEGER
    },
    estado:DataTypes.BOOLEAN,
    descripcion:DataTypes.STRING,
    resultados: DataTypes.STRING,
    // empresa_id: Empresa.id,
    // usuario_id: Usuario.id,

   
    cantidadComprobantesARegistrar: DataTypes.STRING,
    puntoVenta: DataTypes.STRING,
    comprobanteTipo: DataTypes.STRING,
    concepto: DataTypes.STRING,
    tipoDocumento: DataTypes.STRING,
    nroDocumento: DataTypes.STRING,
    comprobanteDesde: DataTypes.STRING,
    comprobanteHasta: DataTypes.STRING,
    comprobanteFecha: DataTypes.DATE,
    importeTotal: DataTypes.DOUBLE,
    ImporteNetoNoGravado: DataTypes.DOUBLE,
    importeNetoGravado: DataTypes.DOUBLE,
    importeExentoIva: DataTypes.DOUBLE,
    importeIva: DataTypes.DOUBLE,
    importeTributos: DataTypes.DOUBLE,
    fechaServDesde: DataTypes.DATE,
    fechaServHasta: DataTypes.DATE,
    FechaVtoPago: DataTypes.DATEONLY,
    tipoMoneda: DataTypes.STRING,
    monotizacionMoneda: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Voucher',
    freezeTableName: false,
    tableName: 'Vouchers',
    timestamps: true,
    createdAt: false,
    updatedAt: false

});
  Voucher.associate = function(models) {
  models.Voucher.belongsTo(models.Empresa, {onDelete: 'CASCADE',
    foreignKey: {allowNull: false}}),
  models.Voucher.belongsTo(models.Usuario, {onDelete: 'CASCADE',
    foreignKey: {allowNull: false}}),
  models.Voucher.belongsTo(models.Cliente, {onDelete: 'CASCADE',
    foreignKey: {allowNull: false}})
  
    }
return Voucher;
};
