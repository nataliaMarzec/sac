"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("empresas", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_empresa: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: false
      },
      cuit_empresa: {
        type: Sequelize.INTEGER(11),
        allowNull:true
      },
      email_empresa: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("empresas");
  }
};

