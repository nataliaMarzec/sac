'use strict';
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
Cliente = require('./sequelizeConnection')

module.exports = (sequelize, DataTypes) => {
  const Facturacion = sequelize.define('Facturacion', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    cuenta: DataTypes.INTEGER,
    denominacion: DataTypes.STRING,
    domicilio_id: DataTypes.STRING,
    telefonos: DataTypes.ARRAY(DataTypes.STRING),
    condicionVenta: DataTypes.ARRAY(DataTypes.STRING),
    grupo: DataTypes.ARRAY(DataTypes.STRING),
    emision: DataTypes.DATEONLY,
    vencimiento: DataTypes.DATEONLY,
    registro: DataTypes.STRING,
    jurisdiccionIIBBRentas: DataTypes.ARRAY(DataTypes.STRING),
    tabla_facturacion_id: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Facturas',
    modelName: 'Empresa'
  });
  Facturacion.associate = function(models) {
    // associations can be defined here
  };
  return Facturacion;
};