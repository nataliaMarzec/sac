'use strict'
const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
const {Empresa,Domicilio,Voucher} = require('./sequelizeConnection.js');


module.exports = function(sequelize, DataTypes) {
	const Usuario = sequelize.define('Usuario',{
		id:{
		    type: Sequelize.INTEGER,
		 	autoIncrement: true,
			primaryKey: true

        },
        rol:{
            type:DataTypes.STRING(10),
        },
		nombre: {
		    type: DataTypes.STRING(35),
		    allowNull: true
	     // validate: {
		     // notNull: {
	     	// 	msg: 'Por favor completa tu nombre'
		   // }
		},
	    cuit: {
	     	type: DataTypes.INTEGER(11),
	     	allowNull:true
			},
        email: {
	    	type: DataTypes.STRING(50),
			allowNull: true
			},	
        password: {
            type:Datatypes.STRING(15),
            required: [false, "La contraseña aun no es obligatoria"],
            },	

		
		},
	    
	{
	
		timestamps: false,
		freezeTableName: true,
		tableName: 'Usuarios',
		modelName: 'Usuario'
		},
      
    );
      
        Usuario.associate = models => {
			models.Usuario.belongsTo(models.Empresa, {
				onDelete: 'CASCADE',
				foreignKey: {
				allowNull: false
				  }
				});
			// models.Cliente.hasMany(models.Domicilio);
			models.Usuario.hasMany(models.Voucher);

		},
     
       console.log("SOY USUARIO:",Usuario === sequelize.models.Usuario);   

	    return Usuario;
    };




