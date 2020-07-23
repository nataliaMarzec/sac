
[![npm version](https://badge.fury.io/js/sequelize-cli.svg)](https://badge.fury.io/js/sequelize-cli)



 [Integración Sequelize-md](md/sequelize.md)

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

## Tablas:

![Esquema Base de datos](tablas.png)



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
 
### Ver instalaciones sequelize.md:
    Instación de faker para generar datos en seed sequelize :
    
    ´npm i faker´

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

[Jgraph-Github](http://jgraph.github.io/drawio-github)
 

