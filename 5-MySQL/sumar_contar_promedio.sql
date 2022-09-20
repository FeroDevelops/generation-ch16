USE sakila;

SELECT * FROM payment;


-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;


-- COUNT() cuenta las filas de una tabla

SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;


-- Cantidad de rentas que tuvo el trabajador #2

SELECT COUNT(*) FROM payment where staff_id = 1;

SELECT COUNT(DISTINCT customer_id) FROM payment;


-- SUM()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(payment_date) AS 'Fecha de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;


-- ¿Cual cliente realizo más rentas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- ORDER BY = ordena segun la columna o funcion que le indiquemos ASC / DESC
-- GROUP BY

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cual cliente gasto más? 526 - 221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC; -- creamos el alias "total" (es como una variable)


-- AVG() - regra el promedio
SELECT customer_id, AVG(amount) AS promedio_cliente FROM payment GROUP BY customer_id ORDER BY promedio_cliente DESC;
