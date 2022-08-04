/* fOR (VARIABLE DE CONTROL; CONDICION, MODIFICADOR de la variable de control) */

        // 0 - 4  => 5 ya no se cuenta
for( var i = 0; i < 5; i++ ){ // i = i + 1
    console.log(i);

}
//console.log("el valor de i es: " + i);

//con decremento

for( var j = 5; j > 0; j-- ){ // i = i + 1
    console.log(j);

}




/* WHILE */ //ciclo no controlado

let control = 0;

while(control < 5){ //condicion
    console.log("while: " + control);

    control++; // modificador
}


let control2 = true;

while(control2 === false){
    alert("estoy trabajando");
}


/* DO... while */     //hacer mientras/hasta

let numero = 0

do{
        console.log("Do... While: " + numero);
        numero++;
}while(false)