let persona = {
    nombre: "Fero",
    apellido: "Rubio",
    edad: 29,
    email: "frubio@ctac.com",
    /* completeName: function(){
        return this.name + " " + this.lastname;
        //return this.name + " " + this.lastname;
    } */
    idioma: "espaniol",
    get leng (){
        return this.idioma.toUpperCase();
    },
    
    set lang (Lang){
        this.idioma = Lang.toLowerCase();
    }


}

//console.log(persona.leng);
persona.lang = "ESPANIOL"
console.log(persona.leng);  
console.log(persona.idioma);  