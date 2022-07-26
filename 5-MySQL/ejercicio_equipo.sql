CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

-- Creacion de tablas
CREATE TABLE cohorte(
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

CREATE TABLE instructor (
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL, 
edad INT NOT NULL, 
cumpleanios DATE NOT NULL, 
RFC varchar(255) NOT NULL, 
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL);

CREATE TABLE direccion(
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL 
);

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL 
);

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);


-- testing
ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES instructor (instructor_id);

ALTER TABLE equipo
ADD CONSTRAINT fk_equipo_alumno
FOREIGN KEY (alumno_id)
REFERENCES  alumno (alumno_id);

ALTER TABLE equipo
DROP FOREIGN KEY fk_equipo_alumno;

ALTER TABLE direccion
ADD CONSTRAINT fk_direccion_alumno
FOREIGN KEY (alumnor_id)
REFERENCES alumno (alumno_id);

ALTER TABLE direccion
DROP FOREIGN KEY fk_direccion_alumno;











