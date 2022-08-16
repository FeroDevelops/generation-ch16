/* let x = 10;
console.log(x.lenght); */

//ejercicio

let person = {
    name: "Takeshi",
    lastname: "Kovacs",
    age: 300,
    mail: "tkovacs@ctac.com",
}

console.log(person);
console.log(person.name);
console.log(person.lastname);
console.log(person.age);
console.log(person.mail);


//AGREGANDO TELEFONO
/* person.tel = "5555678343"
person.tel = "5555678666"

console.log(person);
console.log(person.name); */



let newPerson = new Object();

newPerson.name = "Fero";
newPerson.lastname = "Rubio";
newPerson.age = 29;
newPerson.mail = "frubio@ctac.com"

console.log(newPerson);
console.log(newPerson.name);
console.log(newPerson.lastname);
console.log(newPerson.age);
console.log(newPerson.mail);

let sleeve = {
    name: "Fero",
    lastname: "Rubio",
    age: 29,
    mail: "frubio@ctac.com",
    completeName: function(){
        return this.name + " " + this.lastname;
        //return this.name + " " + this.lastname;
    }

}



let algo = new Object();
console.log(sleeve.name);
console.log(sleeve.completeName());


//for in

for (varPropiedad in person){
    console.log(person[varPropiedad]);
}
let personString = JSON.stringify(person);
console.log(personString);





