/* Tiempo preefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
    nombre: "Juan",
    edad: 35
}


let obj_constructor = new Object();
obj_constructor.nombre = "Dora";
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal['nombre'];
let llave = 'nombre';
console.log('Esto es una llave ' + obj_literal [llave]);



//joink
//Tipo cadena
let cadena = 'Esto es una cadena';
let cadena_Obj = new String('Esto es otra cadena obj');
console.log(cadena);
console.log(cadena_Obj);

//Tipo numérico
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

let lista = ['2','3','5','7',];
let lista_obj = new Array ('1','4','6','8','9','10',);
console.log(lista);
console.log(lista_obj);

//La abstracción consiste en ocultar los detalles de implementación y resaltar las características esenciales de un objeto para los usuarios. Así es como la incorporación de la abstracción en un programa de JavaScript puede mejorar la legibilidad del código y evitar la duplicación. Al proporcionar sólo los detalles importantes a los usuarios, también mejora la seguridad de una aplicación.




