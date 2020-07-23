const { Sequelize ,Op,Model,DataTypes} = require('sequelize');
Cliente = require('./sequelizeConnection')


module.exports = function(sequelize, DataTypes) {
	const Empresa = sequelize.define('Empresa',{
		id:{
		    type: Sequelize.INTEGER(12),
            autoIncrement: true,
            primaryKey: true
		},
		nombre: {
		    type: DataTypes.STRING(25),
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
	    	type: DataTypes.STRING(50),
			allowNull: true
			},	
		direccion_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		razonSocial:{
			type:DataTypes.STRING(50),
			allowNull:true
		},
		cert:Sequelize.STRING(),
        key:Sequelize.STRING(),
        deshabilitada: { 
            type:Sequelize.BOOLEAN(), 
            default: false 
    },
		// clientesActivados: {
		// 	include: [
		// 	//   { model:Cliente, where: { activado: true }}
		// 	{model:Cliente}
		// 	]
		//   },
		},
		
	
		{
			freezeTableName: true,
			tableName: 'Empresas',
			modelName: 'Empresa'
	
            
		},
	
		
  );
  	Empresa.associate = models => {
		models.Empresa.hasMany(models.Cliente);
	  },
     
     console.log("SOY EMPRESA:",Empresa === sequelize.models.Empresa);   
   
     return Empresa;
	 
	
}



	

