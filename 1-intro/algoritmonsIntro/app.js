//alert("Hola Mundo"); comentario de una sola línea

/*
Comentario
de
bloque

*/

//variables

let miVariable = "Fero";

console.log (miVariable);

miVariable= 29;
console.log(miVariable);

const apellido = "Rubio";
console.log(apellido);



//Datos primitivos que mandeja Javascript

//String -- cadena de texto
// "texto"   'texto'  ´texto´ 

let variableCadena = "texto mas texto 35";
console.log(variableCadena);

//Number - Numero
// 12345

let variableNumber = 3456
console.log(variableNumber + 5);

//concatención
//unir dos cadenas de texto
//unir un texto con un numero
//solo  ocurre con el signo de + (suma)
let a = "10";
let b = "1";
console.log(a + b);

//Boolean -- booleano
//dato lógico
//true   false

let verdadero = true;

let falso = false;

console.log(verdadero, falso);

//null -- nulo, un valor vacio

let varNull = null;
console.log(varNull);

//undefined -- indefinido, ausencia completa de valor
// es un estado o sea no esta definido aún
//variable declarada pero sin asignacion de v alor, esa variable es undefineeeed 

let variable;
console.log(variable + 1);

//NaN significa Not a Number

//typeof

let num1 = 456;
console.log(typeof num1);

let varBool = "hola"
console.log(typeof varBool);

let varName = "Fernando"
let varNumber = 29
let varPet = "Melón"

console.log("My name is: ", varName);
console.log("I´m " + varNumber);
console.log("My pet is: ", varPet);

