function miFuncion (a, b){
    return (a + b);
}

let resultado = miFuncion(3, 14);

console.log("El resultado es: " + resultado);


/* ***Función Expresión o Anónima*** */

let suma = function (a, b){    //esta función no tiene nombre
    return(a + b)
};

/* let res = suma (2, 3); */    //este lo comente jeje
let caracteres = "La suma es: "

console.log(caracteres + resultado);

//EJERCICIO


//Self Invoking o Autollamada

(function (a, b){
    console.log("El resultado de Self Invoking es: " + (a + b));

})(3, 4);