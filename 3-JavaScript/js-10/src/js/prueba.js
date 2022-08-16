//las importaciones se ponen en las primeras lineas del código
//y las exportaciones en las últimas lineas del código.
const suma = require( './suma.js');
const resta = require( './resta.js');
/* import resta from './resta.js' */

console.log(suma(10, 50));
console.log(resta(3, 2));