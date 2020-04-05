CREATE DATABASE sac;

USE root;

SHOW TABLES;

CREATE TABLE proveedores (
  id_proveedor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  direccion VARCHAR(100),
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE ;

INSERT INTO proveedores (nombre,direccion) values ('Sofia', 'wanderlust');

SELECT * FROM proveedores;