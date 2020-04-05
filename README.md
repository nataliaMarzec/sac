# SAC Sistema Administrativo Contable

## Presentación:

 En este proyecto se desarrollará un sistema de administración contable con vinculación directa a la Afip.
 Dadas las diferentes entidades Proveedor, Cliente y sus propios datos relacionados se mostrará su respectiva facturación la cual se volcará 
en libros junto a los detalles básicos de los cuales se deducirá las percepciones según convenio.
 La idea es obtener un producto software genérico con orientación a la administración contable que cumplan y sastifagan las solicitudes
del usuario de manera flexible y simple para que sea de fácil gestión, incluso sin tener conocimientos de administración.

 Con tales propósitos se utiliza la metodología ágil Scrum pero de forma individual.

  *falta foto y url!!!!!!!!!!!

* Sus funcionalidades generales son:

- En el transcurso del desarrollo del código deberá ser acorde al sistema Afip, en menor o mayor medida. Ya sea
 sólo con los requerimientos básicos o más complejos si la situación curricular amerita.
- Cargar los libros ventas y proveedores 
- Unificar ambos libros en el libro principal
- Verificar que el sistema se cargue de manera directa a la afip
- Tener en cuenta que la clases de facturación se han ampliado agregando al standard de facturación las electrónicas

* Requisitos:

- Crear la entidad Proveedor(ej: YPF)
- Registrar la entidad Proveedor en formulario
- Eliminar la entidad Proveedor
- Crear la entidad Ventas(Servicios al cliente)
- Registrar la entidad Ventas en formulario
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

*Base de datos 
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

 ~~~
 

