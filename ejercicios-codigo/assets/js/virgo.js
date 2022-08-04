/* CASA VIRGO */

let payaso = 112;
let muneca = 75;

let numeroPayaso = 10;
let numeroMuñeca = 20;

function peso(payaso, muneca, numeroPayaso, numeroMuñeca){

    let pesoPayaso = payaso * numeroPayaso;
    let pesoMuneca = muneca * numeroMuñeca;
    alert("peso payaso", pesoPayaso)
    alert("peso muneca", pesoMuneca)
    let paquetes = pesoTotal/1000;
    let paqueteT = Math.ceil(paquetes);
    alert("Paquetes", paqueteT);

}

peso(payaso, muneca, numeroPayaso, numeroMuñeca);