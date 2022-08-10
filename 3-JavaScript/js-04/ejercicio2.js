


function piramide (pisos){
    for (let f = 0; f < pisos; f++){    
        let patern = ""
        for (let r= 0; r < f+1; r++){
            patern = patern + " " +  "*"
        } 
        console.log(patern);
}
}
piramide(5) 