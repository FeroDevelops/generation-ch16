const urlRandoms = "https://api.thecatapi.com/v1/images/search"

const imgCatto = document.getElementById("img-catto")

const btn = document.getElementById("btn-catto")
console.log(btn);


btn.addEventListener("click", () => {
    console.log("Boton presionado");

    
    getRandomCatto(urlRandoms)
})

async function getRandomCatto(url) {

   const respuesta = await fetch(url)
   const datos = await respuesta.json()

   console.log(datos);
   console.log(datos[0].url);

   imgCatto.src = datos[0].url
   imgCatto.alt = "Foto gato";
    

}