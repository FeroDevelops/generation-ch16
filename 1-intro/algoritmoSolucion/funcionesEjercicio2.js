//Ejercicio 2: Utilizando funciones

/* function calculadoraSueldo () {
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);

    const sueldo = 600;
    const diasSemana = 6;
    const semanasMes = 4;

    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));

}

calculadoraSueldo(100)
calculadoraSueldo(1)
calculadoraSueldo(50) */


function calculadoraSueldo (sueldoIngresado, diasTrabajados) {
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);

    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;

    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));

}

calculadoraSueldo(100,2)
calculadoraSueldo(1,6)
calculadoraSueldo(50,1)

