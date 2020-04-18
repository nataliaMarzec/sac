module.exports = function(sequelize, DataTypes) {
	var Cliente = sequelize.define(
		'Cliente',
		{
			id_cliente: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			nombre_cliente: {
				type: DataTypes.STRING(35),
				allowNull: false
			},
			cuit_cliente: {
				type: DataTypes.INTEGER(),
				allowNull:true
			},
            email_cliente: {
				type: DataTypes.STRING(50),
				allowNull: true
			},
			
        },
		Cliente.associate = function(modelo) {
            Cliente.belongsTo(modelo.Empresa);
        },
		{
			timestamps: false,
			freezeTableName: true,
			tableName: 'clientes'
		}
	);

	return clientes;
};


//////////////
