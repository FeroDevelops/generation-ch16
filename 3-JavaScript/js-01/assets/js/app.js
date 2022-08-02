'use strict' //Permite usar JavaScript de forma estricta.

/* Tipos de Datos */

/* Tipos de Variables */

let a = 20; //Local
const b = 0; //Constante y loval

var c; //Global

const PI = 3.1416;

/*
Scope - Contexto
espacio en el que vive la variable
*/

if(true){
    var d = 15;
}
//var d = "holiiii"
d = "holiiii";

/* console.log(d); */


/* STRING (CADENA DE TEXTO) */

let cadena = "Hola Wapo"


//NÚMERO

let numero = 5;
let numero2 = 5.89;
let numero3 = -5.89;


//BOOLEAN

let booleano = true;
let booleano2 = false;


//UNDEFINED (INDEFINIDO)
let variable;
/* console.log(variable + 5); */


//NULL - "NaN" Not a Number

let vacio = null;
/* console.log(vacio); */

//No es un número
//tratar de realizar una operacion con algun dato que no es un número


//TEMPLATE STRINGS / LITERAL STRINGS (PLANTILAS LITERALES)

/* console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esta es una cadena normal ${5 + 4}"); */

let nombre = 'Fero';
/* let presentacion = ´´ */

/* console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`); */

/* ARREGLOS - MATRICES - ARRAYS */
let arr = [1, "texto", null, undefined, [true, false]];

//Notación de corchetes
/* console.log(arr [4][0]); */

if (arr[4][0] === true){
    /* console.log("es verdad"); */
}

let arr2 = new Array("B", 2);
/* console.log(arr2); */

//OBJETOS
//clase / valor

const persona = {
    nombre: 'Fero',
    edad: 29,
    hobbies: [
        "Patinar",
        "Procrastinar",
        "Comer",
        "Comer otra vez"        
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000
    },
    saludar: function () {
        return "Saludar";       
    }
};

//Notació de punto
console.log(`My name is ${persona.nombre}`);

console.log(`Mi hobbie favorito es ${persona.hobbies[3]}`);

console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(`La acción que realiza es: ${persona.saludar()}`);



/* Arreglo de objetos */
/* [{}, {}, {}] */

