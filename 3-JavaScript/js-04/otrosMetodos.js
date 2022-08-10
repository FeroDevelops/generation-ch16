// sort()
//Ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);


const arr2 = ["Hola", "adios", "bienvenido", "Calle"];

arr2.sort();

console.log(arr2);


const arr3 = [5, 1231, 567, 1 ,80];

arr3.sort((a, b) => b - a); //ordena numeros de forma mayor a menor
arr3.sort((a, b) => a - b); //ordena numeros de forma menor a mayor


console.log(arr3);

//funcion declarada
//hoisting
//un proceso de reacomo automatico del codigo

function sumar (a, b){
    return a + b;
}

console.log(sumar(5, 7));

let a = 2;
console.log(a);



//funcion expresada
//hoisting no funciona

const multiplicar = function (a, b){
    return a * b;
}

console.log(multiplicar(3, 5)); //si pasamos este print a la linea uno no funciona


//funciones flecha
//

const dividir = (a, b) => { //no son necesarios los corchetes
    return a / b; //no es necesario el return
}

console.log(dividir(10, 2));


//forEach
//un ciclo que recorre en automatico todo nuestro arreglo

/* const arrNumeros = [1,4,6,8,10,20,30];

for( let i = 0; i < arrNumeros.length; i++ ) {
    arrNumeros [i] = arrNumeros[i] *2;        
}

console.log(arrNumeros); */

/* const arrNumeros = [1,4,6,8,10,20,30]

arrNumeros.forEach((elemento, index, arr) => console.log(elemento, index, arr)); */



//multiplicanding x2

const arrNumeros = [1,4,6,8,10,20,30]

arrNumeros.forEach((elemento) => console.log(elemento *= 2) //elemento = elemento * 2
);

//forEach (elemento, indice, arreglo completo)
