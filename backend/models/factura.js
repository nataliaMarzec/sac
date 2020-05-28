'use strict';
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
Empresa = require('./sequelizeConnection');
Cliente = require('./sequelizeConnection')

module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    descripcion:DataTypes.STRING,
    fecha:DataTypes.DATEONLY,
    cantidad:DataTypes.INTEGER,
    unitarioTotal:DataTypes.INTEGER,

  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Facturas',
    modelName: 'Factura'
  });
  Factura.associate = function(models) {
    models.Factura.belongsTo(models.Cliente, {
        onDelete: 'CASCADE',
        foreignKey: {
        allowNull: false
          }
        })
  
  };
  return Factura;
};