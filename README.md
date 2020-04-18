# [![npm version](https://badge.fury.io/js/sequelize-cli.svg)](https://badge.fury.io/js/sequelize-cli)

 [Sequelize](https://sequelize.org) 

# SAC Sistema Administrativo Contable

## Presentación:

 En este proyecto se desarrollará un sistema de administración contable con vinculación directa a la Afip.
 Dadas las diferentes entidades Proveedor, Cliente y sus propios datos relacionados se mostrará su respectiva facturación la cual se volcará 
en libros junto a los detalles básicos de los cuales se deducirá las percepciones según convenio.
 La idea es obtener un producto software genérico con orientación a la administración contable que cumplan y sastifagan las solicitudes
del usuario de manera flexible y simple para que sea de fácil gestión, incluso sin tener conocimientos de administración.


  *falta foto y url!!!!!!!!!!!

## Sus funcionalidades generales son:

- En el transcurso del desarrollo del código deberá ser acorde al sistema Afip, en menor o mayor medida. Ya sea
 sólo con los requerimientos básicos o más complejos si la situación curricular amerita.
- Cargar los libros ventas y proveedores 
- Unificar ambos libros en el libro principal
- Verificar que el sistema se cargue de manera directa a la afip
- Tener en cuenta que la clases de facturación se han ampliado agregando al standard de facturación las electrónicas

## Requisitos:
- Crear formulario
- Crear la entidad Proveedor(ej: YPF)
- Registrar la entidad Proveedor en formulario
- Modificar la entidad Proveedor
- Eliminar la entidad Proveedor
- Crear la entidad Ventas(Servicios al cliente)
- Registrar la entidad Ventas en formulario
- Modificar la entidad Provedor
- Eliminar la entidad Ventas
- Crear la facturación en ventas
- Modificar facturación en ventas
- Crear la facturación a proveedores
- Modificar facturación a proveedores
- Crear Libro Proveedores(Dividido según cuentas)
- Cargas detalles Proveedores
- Crear Libro Ventas
- Cargar detalles Ventas
- Calcular Percepciones según convenio
- Crear Libro Principal
- Cargar Libro Principal
- Vincular Libro Principal a Sistema Afip
- Crear backup(opcional)
- Creación cvs(opcional)


## Instalaciones principales:
  ~~~
  install node
  curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
  sudo apt-get install -y nodejs 
  npm init 


  ~~~
luego...
~~~
 install yarn
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 sudo apt-get update && sudo apt-get install yarn
~~~
luego..
~~~
npm init
npm install uuid --save
~~~
testeando con..
~~~
npm install jest --save-dev
npm test
~~~
y para convertir nuestro servidor en un servidor Rest
~~~
npm install express body-parser --save
~~~
___
 
 
 
 
### Instalaciones Sequelize:


[sequelizeMigraciones!](https://rosolutions.com.mx/blog/index.php/2018/08/06/como-usar-un-orm-en-node-js/)

[sequelize](https://ipenywis.com/tutorials/Learn-Sequelize-ORM-on-Node.js-with-MySQL-From-Scratch-in-One-Video)

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

crear src/database/connection.js 
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

/* 20190214225010-create_empresas_table.js */


*** javascript

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

*** javascript

Ahora que se crean nuestras migraciones, necesitamos migrarlas a la base de datos.
~~~
sequelize db:migrate
sequelize db:migrate:status
~~~
Para borrar una migración:
~~~
sequelize db:migrate:undo    
~~~

¡A partir de ahora se trabaja con el cli de Sequelize dentro de las posibilidades!
(CLI-Sequelize)[https://github.com/sequelize/cli]







### Instalaciones base de datos:

*~Base de datos :
 Durante el curso vamos a utilizar MySql Community Edition como motor de base de datos ya que es software libre y por el otro, es un motor
 muy utilizado a nivel industrial en sistemas productivos de tamaño chico y mediano.
 La instalación del motor suele traer incluido un cliente de consola. También vamos a utilizar un cliente gráfico llamado MySql Workbench.

 ~~~
 sudo apt-get install mysql-server
 sudo apt-get install mysql-workbench
 service mysql status 
 
 *Líneas de comando:
 sudo service mysql stop
 sudo service mysql start
 sudo service mysql restart
 create database sacdb;


 *Conectarse al motor:
 mysql -u root -proot 
 mysql -u root -proot  -h ipdecomputadoraRemota        ----> Si el motor de bd está configurado en una computadora remota
 
 *Se genera un usuario con su password, y luego le otorgaremos permisos de manipulación sobre la base de datos creada:
 create user 'miusuario' identified by 'mipass';
 grant all privileges on sacdb.* to miusuario; 

 *Este usuario es sólo para la base de datos sacdb
 exit;
 mysql -u miusuario -pmipass sacdb

 *Abrir el entorno gráfico:
  mysql-workbench
  
 *Para refrescar privilegios de usuario:
  flush privileges;



 ~~~
 
 
 
 
 
 ## Recursos:
 
[mysql](https://www.jveweb.net/archivo/2011/03/manejando-mysql-desde-la-linea-de-comandos.html)

[JiraSoftware](https://software-a-medida.atlassian.net)

[Trello](https://trello.com/b/wgBQkeNf/sac-sistema-administrativo-contable)
 

