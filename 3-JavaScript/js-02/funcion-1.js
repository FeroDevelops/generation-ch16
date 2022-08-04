function miSuma(a, b){
    let resultado = (a + b);  
    console.log("la suma es ",+ resultado);  
}

miSuma(2, 3);

function miSuma (a, b){
    console.log("la suma es ",+ (a + b));
}
miSuma(4 , 6);

function miProducto (a, b){
    return (a * b);
}

console.log("el producto es " + miProducto(4 , 5));

let res 

function miResta (a, b){
    return (a - b);
}
res = miResta(10, 4);

console.log("La resta es "+ res);

//EJERCICIO

function myName(name, lname1, lname2){
    nombre = name + " " + lname1 + " " + lname2
    return (nombre);
}

let name = "Fernando"
let lname1 = "Rubio"
let lname2 = "Gallegos"

console.log("My name is " + myName(name, lname1, lname2));




function satanicDivision (a, b){
    return (a/b);
}

console.log(satanicDivision(2, 3));
