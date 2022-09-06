-- SHOW DATABASES; comentario de una linea
/*
Bloque de comentarios



*/

CREATE DATABASE tienda;

USE tienda;

-- DROP DATABASE tienda;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '5546367467', 'Comala'),
('Raúl', 'Sánchez', '0987654321', 'Guadalajara'),
('Victor', 'Hernández', '1234567890', 'Pachuca');

SELECT * FROM clientes;

DELETE FROM clientes;
WHERE cliente_id = 13;

DELETE FROM clientes;
WHERE 