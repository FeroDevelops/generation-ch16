class Persona{
    //
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombre(){
        return this.nombre;
    }
    set nombre (nombre){
        this.nombre = _nombre;
    }
}

let persona1 = new Persona("Jose", "Dorasco")
console.log(persona1);

persona1.nombre = "Rick Sanchez";
console.log(persona1.nombre);

let persona2 = new Persona("Vicente", "Garcia")
console.log(persona2);