'use strict'

//conversión de tipos datos
//casteo / parseo
//casting / parsing

//coersión de tipo de dato
//conversión utomática de datos

let num = "5";
let num2 = "10";

//concatenación
//resultado de unir dos cadenas de texto
//unimos un número con una cadena de texto
console.log(num - num2);

//Number()

let num3 = "4.02";
console.log(Number(num3));
console.log(num3);

/* String () */
//Convierte números o booleanos a cadenas

let num4 = String(0);
console.log(String(num4));
console.log(typeof (num4));

/* Boolean() */
//convierte números y cadenas a booleanos
//0, "", null, NaN y undefined = false
//faultsy values = valores que tienden a falso
//cualquier otro numero = true

let num5 = Boolean("a")
console.log(num5);
console.log(typeof num5);