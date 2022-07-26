const url = "https://dog.ceo/api/breeds/image/random"

//Respuesta de la peticion
fetch(url).then((respuesta) => {
    /* console.log(respuesta); */
})

//Obtener la informacion de la peticion
//Forma #1
fetch(url)
.then ((resp) => resp.json())
.then ((datos) =>{

    console.log(datos);

}).catch( (error) =>{
    console.log(error);
})

//Forma #2
async function getRandomDoggo() {
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json()

        console.log(datos);

    }catch(error){
        
        console.log(error);

    }
}
getRandomDoggo()