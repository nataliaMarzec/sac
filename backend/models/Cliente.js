'use strict'
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
const db = require('./sequelizeConnection.js');
var Empresa = require('./Empresa.js');


module.exports = function(sequelize, DataTypes) {
	var Cliente = sequelize.define(
		'Cliente',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
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
			//especifica si se crearan los campos  createAt y updateAt fechas
			timestamps: false,
			freezeTableName: true,
			tableName: 'Clientes',
			modelName: 'Cliente'
		},
      
  );
      	// 	Cliente.assosiate = function(models){
        //  Cliente.belongTo(models.Empresa,{foreingKey:'id',targetKey:'empresa_cliente_id'})
        // }
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


	
	







