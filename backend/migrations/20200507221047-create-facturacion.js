'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Facturaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      cuenta: {
        type: Sequelize.INTEGER
      },
      denominacion: {
        type: Sequelize.STRING
      },
      domicilio_id: {
        type: Sequelize.STRING
      },
      // telefonos: {
      //   type: Sequelize.ARRAY(Sequelize.STRING)
      // },
      // condicionVenta: {
      //   type: Sequelize.ARRAY(Sequelize.STRING)
      // },
      // grupo: {
      //   type: Sequelize.ARRAY(Sequelize.STRING)
      // },
      emision: {
        type: Sequelize.DATEONLY
      },
      vencimiento: {
        type: Sequelize.DATEONLY
      },
      registro: {
        type: Sequelize.STRING
      },
      // jurisdiccionIIBBRentas: {
      //   type: Sequelize.ARRAY(Sequelize.STRING)
      // },
      tabla_facturacion_id: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Facturaciones');
  }
};