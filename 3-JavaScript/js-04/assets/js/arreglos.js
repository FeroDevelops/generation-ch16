/* ARREGLOS */
//Colección de elementos
//Cada elemento ocupa una pocisión
//Esa posición se conoce como índice y comienza a partir de 0

let arr = [1, 2, 3, 4];
console.log(arr);

//el arreglo es un objeto
//popiedades - describen el objeto y los métosos (acciones) que puede realizar un objeto

console.log(arr [2]);
arr [4] = 190;
arr [4] = "Hola";
console.log(arr);

//métodos de arregos

const arreglo = ["adios"];

//push() agrega elementos al final de nuestro arreglo

arreglo.push(2);
arreglo.push(5+3>20); //false

let num = 500;

arreglo.push(num);

console.log(arreglo);

//unshift() agrega elementos al inicio de nuestro arreglo

arreglo.unshift("A")
arreglo.unshift("F")

console.log(arreglo);

console.log(typeof (arreglo[4]));

// pop() método para quitar un elemento del final de nuestro arreglo osea el ultimo jejeje

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

// shift() método para quitar un elemento del inicio de nuestro arreglo osea el primero jojojo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

// splice() método para quitar un elemento de cualquier posicion de nuestro arreglo
//tambien permite quitar una parte de cualquier posicion de nuestro arreglo
//permite insertar uno o varios elementos en una pocisión en especifico

arreglo.splice(1, 1, "Aiñs", 666)
                //posicion de inicio
                //cantidad de elementos a afectar
                //elemento(s) que queremos insertar/eliminar
console.log(arreglo);


//todos estos metodos modifican el arreglo original

//METODOS QUE NO MODIFICAN EL ARREGLO ORIGINAL
//(hacen una copia, y despues modifican esa copia)

// slice() método para cortar partes de un arreglo
//debemos indicar un rango (primer valor es el inicio y el segundo nuestro final)
let dato3 = arreglo.slice(0, 2)
console.log(dato3);
console.log(arreglo);
