'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id:{
		    type: Sequelize.INTEGER,
		 	  autoIncrement: true,
			  primaryKey: true

        },
      rol:{
        type:Sequelize.STRING(10),
        },
	  	nombre: {
		    type: Sequelize.STRING(35),
		    allowNull: true
	     // validate: {
		     // notNull: {
	     	// 	msg: 'Por favor completa tu nombre'
		   // }
		},
	    cuit: {
	     	type:Sequelize.INTEGER(11),
	     	allowNull:true
			},
        email: {
	    	type:Sequelize.STRING(50),
		  	allowNull: true
			},	
      password: {
        type:Sequelize.STRING(),
        required: [false, "La contraseña aun no es obligatoria"],
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
    await queryInterface.dropTable('Usuarios');
  }
};