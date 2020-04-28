'use strict'
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
const db = require('./sequelizeConnection.js');
const Cliente= require('./Cliente.js');


module.exports = function(sequelize, DataTypes) {
	var Empresa = sequelize.define('Empresa',{
		
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
	     	type: DataTypes.STRING(11),
	     	allowNull:true
			},
        email: {
	    	type: DataTypes.STRING(50),
			allowNull: true
			},	
		// clientesActivados: {
		// 	include: [
		// 	//   { model:Cliente, where: { active: true }}
		// 	{model:Cliente}
		// 	]
		//   },
		},
		
		
		//OPCIONES
		{
			//especifica si se crearan los campos  createAt y updateAt para id
			timestamps: false,
			freezeTableName: true,
			tableName: 'Empresas',
			modelName: 'Empresa'
		},
	
		
  );
  	Empresa.associate = models => {
		models.Empresa.hasMany(models.Cliente)
	  },
     
     console.log("SOY EMPRESA:",Empresa === sequelize.models.Empresa);   
   
     return Empresa;
	 
	
}

// Empresa
//   .create({ nombre: 'Juan', cuit: '27290005553' ,email:'@Juan'})
//   .then(empr => {
//     console.log(empr.get('nombre')); 
// 	console.log(empr.get('cuit'));
// 	console.log(empr.get('email'));
//   })

	





