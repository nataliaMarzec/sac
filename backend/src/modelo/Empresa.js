module.exports = function(sequelize, DataTypes) {
	var empresa = sequelize.define(
		'Empresa',
		{
			id_empresa: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			nombre_empresa: {
				type: DataTypes.STRING(35),
				allowNull: false
			},
			cuit_empresa: {
				type: DataTypes.INTEGER(),
				allowNull:true
			},
            email_empresa: {
				type: DataTypes.STRING(50),
				allowNull: true
			},
			
		},
		// empresa.associate = function(modelo) {
		// 	empresa.hasMany(modelo.cliente);
		//   },
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'empresas'
		}
	);

	return empresa;
};




// Empresa.sync() - Esto crea la tabla si no existe (y no hace nada si ya existe)
// Empresa.sync({ force: true }) - Esto crea la tabla, soltándola primero si ya existía
// Empresa.sync({ alter: true }) - Esto comprueba cuál es el estado actual de la tabla en la base de datos (qué columnas tiene, cuáles son sus tipos de datos, etc.) y luego realiza los cambios necesarios en la tabla para que coincida con el modelo.

//borra la tabla Users
// await Empresa.drop();
// console.log("User table dropped!");

