'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Clientes", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: false
      },
      cuit: {
        type: Sequelize.STRING(12),
        allowNull:true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Clientes");
  }
};

