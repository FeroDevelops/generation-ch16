

function saludar (){
    console.log("Hola guapo :*");
}

//saludar();

//Arreglos

let num = []
console.log(num);

let arr1 = new Array ();
console.log(arr1);

//como usar un arreglo

const arr = [1,2,3,4,5];
console.log(arr);
//notación de corchetes
console.log(arr[3]);

arr [5] = 25;
arr [6] = 8;
arr [6] = 0
arr [6] = 15

//arr [7] = undefinded
//arr [8] = undefinded
//arr [9] = undefinded

arr [10] = 40;

arr [7] = 9;

console.log(arr);

//Propiedades de los arreglos
//(Descripción de nuestro arreglo)
console.log(arr. length);


//Métodos:
//Acciones que puede realizar un objeto (en este caso el objeto es el arreglo

const frutas = ["Manzana", "Plátano"]
console.log(frutas);

//push()   
//agrega un valor al final del arreglo


let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);


console.log(frutas);


//pop()
//quita un elemento del final de arreglo y lo devuelve

let elementoBorrado = frutas.pop() 
console.log(frutas);
console.log(elementoBorrado);

//unshift()
//Arega un elento al principio del arreglo 

let devolver = frutas.unshift("Uva", "Pera")
console.log(frutas);
console.log(devolver);

//Shift()
//Elimina el primer elemento  del arreglo y lo devuelve/retorna 

frutas.shift();
frutas.shift();
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
console.log(frutas);
console.log(frutaQuitada1);
console.log(frutaQuitada);









