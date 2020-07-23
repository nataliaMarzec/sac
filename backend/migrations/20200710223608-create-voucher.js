'use strict';
const {Empresa,Cliente,Usuario} = require('../models/sequelizeConnection');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado:Sequelize.BOOLEAN,
      descripcion:Sequelize.STRING(),
      resultados:Sequelize.STRING(),
      // empresa_id: Empresa.id,
      // usuario_id: Usuario.id,


      cantidadComprobantesARegistrar: {
        type: Sequelize.STRING
      },
      puntoVenta: {
        type: Sequelize.STRING
      },
      comprobanteTipo: {
        type: Sequelize.STRING
      },
      concepto: {
        type: Sequelize.STRING
      },
      tipoDocumento: {
        type: Sequelize.STRING
      },
      nroDocumento: {
        type: Sequelize.STRING
      },
      comprobanteDesde: {
        type: Sequelize.STRING
      },
      comprobanteHasta: {
        type: Sequelize.STRING
      },
      comprobanteFecha: {
        type: Sequelize.DATE
      },
      importeTotal: {
        type: Sequelize.DOUBLE
      },
      ImporteNetoNoGravado: {
        type: Sequelize.DOUBLE
      },
      importeNetoGravado: {
        type: Sequelize.DOUBLE
      },
      importeExentoIva: {
        type: Sequelize.DOUBLE
      },
      importeIva: {
        type: Sequelize.DOUBLE
      },
      importeTributos: {
        type: Sequelize.DOUBLE
      },
      fechaServDesde: {
        type: Sequelize.DATE
      },
      fechaServHasta: {
        type: Sequelize.DATE
      },
      FechaVtoPago: {
        type: Sequelize.DATE
      },
      tipoMoneda: {
        type: Sequelize.STRING
      },
      monotizacionMoneda: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vouchers');
  }
};