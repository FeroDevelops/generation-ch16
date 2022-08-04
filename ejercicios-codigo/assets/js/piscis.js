/* CASA PISCIS */

let saldo = 10000;
function consulta(){
  let retirar = prompt("Ingrese la cantidad a retirar");
  saldo = saldo - retirar;
  return saldo;
}
console.log("Saldo disponible: " + consulta());



