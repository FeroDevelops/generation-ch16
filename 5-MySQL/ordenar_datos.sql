USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Popultion AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC; -- solo cmbia temporalmente

SELECT DISTINCT Continent FROM country;

-- WHERE cláusula
-- < > <= >= != =

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent = 'North America';

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;
