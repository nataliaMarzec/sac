'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER()
      },
      nombre: {
        type: Sequelize.STRING()
      },
      cuit: {
        type:Sequelize.INTEGER(11),
        allowNull:true
     },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
     },	
      direccion: {
        type: Sequelize.STRING(50),
        allowNull: true
     },
     razonSocial:{
       type:Sequelize.STRING(50),
       allowNull:true
     },
     cert:Sequelize.STRING,
     key:Sequelize.STRING,
     deshabilitado: { 
          type:Sequelize.BOOLEAN, 
          default: false 
   },
      // clientesActivados: {
      // 	include: [
      // 	//   { model:Cliente, where: { active: true }}
      // 	{model:Cliente}
      // 	]
      //   },
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
    await queryInterface.dropTable('Empresas');
  }
};