'use strict'
const { Sequelize ,Op,Model} = require('sequelize');
const {Empresa,Voucher} = require('./sequelizeConnection.js');


module.exports = function(sequelize,DataTypes) {
	const Cliente = sequelize.define('Cliente',{
		id:{
		    type:Sequelize.INTEGER,
		 	autoIncrement: true,
			primaryKey: true

    	},
		nombre: {
		    type:Sequelize.STRING(35),
		    allowNull: true
	     // validate: {
		     // notNull: {
	     	// 	msg: 'Por favor completa tu nombre'
		   // }
		},
	    cuit: {
	     	type:DataTypes.BIGINT.UNSIGNED,
	     	allowNull:true
			},
        email: {
	    	type:Sequelize.STRING(50),
			allowNull: true
			},	
		activado:{
			type:Sequelize.BOOLEAN,
			default:false
		},

		// empresa_cliente_id:{
		// 	type: DataTypes.INTEGER(),
		// 	references:{	
		// 		model:'Empresa',
		// 		key:'id'
		// 	},
      
				

		// },
		
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
				});
			// models.Cliente.hasMany(models.Domicilio);
			models.Cliente.hasMany(models.Voucher);

		},
     
       console.log("SOY CLIENTE:",Cliente === sequelize.models.Cliente);   

	    return Cliente;
    };


	
	







