//Variable que simulo los datos pedidos
const saludo = "Hola guapo"
const datos = [
    {
        nombre: "Fernando",
        apellido: "Rubio"
    },
    {
        nombre: "Francisco",
        apellido: "Rubio"
    },
    {
        nombre: "Fabio",
        apellido: "Rubio"
    }
]

//funcion para siular una petición
function obtenerDatos(){

    return new Promise ( (resolve, reject) =>{

        setTimeout( () => {

            if(true){ //false da error

                resolve(datos)

            } else {

                reject("uWh*re")

            }

        }, 3000)
        
    })
    
}

//FORMA NO. 1
obtenerDatos().then( (datos) => {
    console.log("Forma 1");  
    console.log(datos);
}).catch( (error) => {
    console.log("Existe un error en la petición");
    console.log(error);
})

//FORMA NO. 2 (con funciones asincrona: await-async)

async function funcionAsincrona() {

    try{

        const datos = await obtenerDatos()
        console.log(datos);

    }catch(error){

        console.log(error);

    }

/*     console.log("Forma 2");    
    const datos = await obtenerDatos()
    console.log(datos); */
}

funcionAsincrona()
