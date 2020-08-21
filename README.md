_...En proceso de desarrollo..._

***
***

<span style="color:blue"> ***SAC*** Sistema Administrativo Contable </span>

***
***

***Presentación***:
 
 Sac es un software genérico que administra tareas contables. 
 Permite observar los movimientos de la entidad laboral.
 Otorga flexibilidad, simple gestión, sin necesidad de conocimientos contables.
 

***Sus funcionalidades generales son***:
 
- Proveer información sobre los movimientos
- Cargar los datos del cliente
- Cargar datos de ventas
- Cargar datos de cobros
- Cargar artículos

***Requisitos:

- Crear la entidad Clientes(compradores)
- Crear la entidad Artículos
- Crear la entidad Domicilio
- Registrar la entidad Clientes en formulario
- ABM Clientes:
   * Alta
   * Baja
   * Modificación
- ABM Artículos:
   * Alta
   * Baja
   * Modificación


## Tablas:

![Esquema Base de datos](tablas.png)



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

[Trello](https://trello.com/b/wgBQkeNf/sac-sistema-administrativo-contable)

[Jgraph-Github](http://jgraph.github.io/drawio-github)
 

