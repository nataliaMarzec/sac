'use strict'
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
const Empresa = require('./sequelizeConnection.js');



module.exports = function(sequelize, DataTypes) {
	const Cliente = sequelize.define('Cliente',{
		id:{
		    type: Sequelize.INTEGER,
		 	autoIncrement: true,
			primaryKey: true

    	},
		nombre: {
		    type: DataTypes.STRING(35),
		    allowNull: false
	     // validate: {
		     // notNull: {
	     	// 	msg: 'Por favor completa tu nombre'
		   // }
		},
	    cuit: {
	     	type: DataTypes.STRING(12),
	     	allowNull:true
			},
        email: {
	    	type: DataTypes.STRING(50),
			allowNull: true
			},	

		// empresa_cliente_id:{
		// 	type: DataTypes.INTEGER(),
		// 	references:{	
		// 		model:'Empresa',
		// 		key:'id'
		// 	},
      
				

		// },
		// activados:true,
		},
	    
	{
	
		timestamps: false,
		freezeTableName: true,
		tableName: 'Clientes',
		modelName: 'Cliente'
		},
      
    );
      
        Cliente.associate = models => {
			models.Cliente.belongsTo(models.Empresa, {
				onDelete: 'CASCADE',
				foreignKey: {
				allowNull: false
				  }
				})
		},
     
       console.log("SOY CLIENTE:",Cliente === sequelize.models.Cliente);   

	    return Cliente;
    };


	
	







