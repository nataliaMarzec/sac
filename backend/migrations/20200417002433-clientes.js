'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clientes", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_cliente: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: false
      },
      cuit_cliente: {
        type: Sequelize.INTEGER(11),
        allowNull:true
      },
      email_cliente: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clientes");
  }
};


