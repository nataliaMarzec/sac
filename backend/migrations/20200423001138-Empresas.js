'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Empresas", {
      id:{
      type: Sequelize.INTEGER(12),
            autoIncrement: true,
            primaryKey: true
 
      },
      // id: {
      //   type: Sequelize.STRING(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   autoIncrement: true
      // },
      nombre: {
        type: Sequelize.STRING(25),
        allowNull: true,
        unique: false
      },
      cuit: {
        type: Sequelize.STRING(11),
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
    return queryInterface.dropTable("Empresas");
  }
};