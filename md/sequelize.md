# Integrando Sequelize:

### Instalaciones Sequelize:

[sequelizeMigraciones!](https://rosolutions.com.mx/blog/index.php/2018/08/06/como-usar-un-orm-en-node-js/)


#  ¿Por qué usar Sequelize en lugar de consultas SQL estándar?

Básicamente porque admite más de un sistema de base de datos y le proporciona una API de base de datos OOP con todas las consultas en forma de métodos y funciones para que no tenga que escribir ni preocuparse por las consultas, además de su avanzado sistema de asociación para establecer relaciones entre modelos

~~~
npm install --save sequelize
npm install --save mysql2
~~~
luego se crearán los folders migrations,config,models con la siguiente líneas de comando:
~~~
sequelize init
~~~

También necesitamos instalar Sequelize-CLI para administrar nuestro proyecto y realizar un seguimiento de las migraciones.
~~~
sudo npm install sequelize-cli -g 
~~~

crear src/models/sequelizeConnection.js 
crear modelo Empresa.js ,Clientes.js, etc

Iniciar sequelize:
~~~
sequelize init 
~~~

En cli sequelize:
~~~
sequelize migration:generate --name create_empresas_table
sequelize migration:generate --name create_clientes_table
~~~

8- luego copio el siguiente codigo en el archivo de migracion empresas:

ejemplo en /* 20190214225010-create_empresas_table.js */


~~~

"use strict";

module.exports = {
  <!-- up: transforma el estado actual de los modelos. -->
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("empresas", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_empresa: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: false
      },
      cuit_empresa: {
        type: Sequelize.INTEGER(11),
        allowNull:true
      },
      email_empresa: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

<!-- down: revierte alguna funcionalidad específica. -->
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("empresas");
  }
};
~~~

Ahora que se crean nuestras migraciones, necesitamos migrarlas a la base de datos.
~~~
sequelize db:migrate
sequelize db:migrate:status
~~~
Para dejar una migración en estado "down":
~~~
sequelize db:migrate:undo    
~~~

¡A partir de ahora se trabaja con el cli de Sequelize dentro de las posibilidades!
[CLI-Sequelize!][https://github.com/sequelize/cli]

[sequelize](https://ipenywis.com/tutorials/Learn-Sequelize-ORM-on-Node.js-with-MySQL-From-Scratch-in-One-Video)
