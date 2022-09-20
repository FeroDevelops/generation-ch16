USE tienda;

-- INNER JOIN
-- Unión Explícita

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.nombre = compra.orden_id;

/*INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (9, '2022-09-07', 300.50, 2);*/


SELECT
clientes.cliente_id AS 'Número de cliente',
clientes.nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;



-- Unión Implícita

SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;


-- LEFT JOIN

SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;


-- RIGHT JOIN

SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada país

USE sakila;

/*
address - city_id / address
city    - city_id / city / country_id 
country - country_id / country
*/

SELECT
address.address,
city.city,
city.country_id
FROM city
INNER JOIN address
ON address.city_id = city.city_id;


SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id
