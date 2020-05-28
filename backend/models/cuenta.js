'use strict';
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
Cliente = require('./sequelizeConnection')

module.exports = (sequelize, DataTypes) => {
  const Cuenta = sequelize.define('Cuenta', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    cuenta: DataTypes.INTEGER,
    denominacion: DataTypes.STRING,
    condicionVenta: DataTypes.STRING,
    grupo: DataTypes.STRING,
    emision: DataTypes.DATEONLY,
    vencimiento: DataTypes.DATEONLY,
    registro: DataTypes.STRING,
    jurisdiccionIIBBRentas:DataTypes.STRING,
  
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Cuentas',
    modelName: 'Cuenta'
  });
  Cuenta.associate = function(models) {
    // associations can be defined here
  };
  return Cuenta;
};