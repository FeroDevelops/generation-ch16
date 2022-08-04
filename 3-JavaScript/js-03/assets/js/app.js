
/* Control de flujo */
/* Condicionales */
/* If */


let condicion = false

//un "=" es asignacion
//dos "=" (==, igual que) devuelve un verdadero cuando se cumple la condicion
//tres "=" (===, estrictamente igual que) devuelve un verdadero cuando se cumple la condicion


if(condicion === 10){
    /*
        Código que se hace si se cumple
        la condición A
    */
    console.log("Entro en la condicion A");

} else if (condicion === "Hola") {
    /*
        Código que se hace si se cumple
        la condición B
    */
    console.log("Entro en la condicion B");
} else if (condicion === false) {
    /*
        Código que se hace si se cumple
        la condición C
    */
    console.log("Entro en la condicion C");
} else {
    /*
        Código que se hace si no se cumple
        ninguna de las condiciones anteriores
    */
};

let nuevaCondicion = 156



switch (nuevaCondicion == 156) {

    case 156:
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
        break;

    case "Restar":
        console.log("Nos vemos");        
        break;

    case true:
        console.log("Te mando un saludo");        
        break;

    case false:
        console.log("Caso falso");        
        break;

    default: //por defecto
        console.log("No entendi tu mensaje");
}

