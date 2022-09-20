USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Popultion AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC; -- solo cmbia temporalmente

SELECT DISTINCT Continent FROM country;


-- cláusula WHERE
-- < > <= >= != =

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent = 'North America';

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;


-- cláusula BETWEEN (se utiliza junto con WHERE)

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000;

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;


-- operadores lógicos OR / AND / != 

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';

SELECT * FROM country WHERE Continent = 'Asia' AND Continent = 'Europe' AND Continent = 'North America'; -- con AND tienen que cumplirse las dos condiciones, por eso no muestra nada

SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';


-- operador IN

SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;


-- Buscar o filtrar valores NULL

SELECT * FROM country WHERE IndepYear IS NULL;

SELECT * FROM country WHERE IndepYear IS NOT NULL;


-- LIKE sirve para buscar un patrón específico
-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter

SELECT Name FROM country WHERE Name LIKE '%as';

SELECT Name FROM country WHERE Name LIKE '%as%';

SELECT * FROM country WHERE Continent LIKE '%asia%';

SELECT * FROM country WHERE Name LIKE '%and%';

SELECT * FROM country WHERE Name LIKE '%e_a';

SELECT * FROM country WHERE Continent LIKE 'asia';

