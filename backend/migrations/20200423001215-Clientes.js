'use strict';

module.exports = {
  up: (queryInterface, Sequelize,DataTypes) => {
    return queryInterface.createTable("Clientes", {
     id:{
      type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
 
     },
      nombre: {
        type: Sequelize.STRING(35),
        allowNull: true,
        unique: false
      },
      cuit: {
        type:DataTypes.BIGINT.UNSIGNED,
        allowNull:true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      activado:{
        type: Sequelize.BOOLEAN,
        default:false
      },
  
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Clientes");
  }
};

