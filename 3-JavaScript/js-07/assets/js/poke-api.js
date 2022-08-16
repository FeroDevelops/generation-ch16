/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"




/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
//console.log(imgPokemon);
const idPokemon = document.getElementById("id-pokemon")
//console.log(idPokemon);
const nombrePokemon = document.getElementById("nombre-pokemon")
//console.log(nombrePokemon);
const listaHabilidades = document.getElementById("lista-habilidades")
//console.log(listaHabilidades);
const listaTipos = document.getElementById("lista-tipos")
//console.log(listaTipos);
const formulario = document.getElementById("buscador-pokemon")
//console.log(formulario);

/* Eventos :3 */

formulario.addEventListener("submit", (e) =>{

    e.preventDefault()

    //console.log("TestBoton");

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value


    //console.log(nuevaBusqueda); 
    obtenerPokemon(nuevaBusqueda);  
})



/* Funciones :3 */
async function obtenerPokemon (url){
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()


        //YA NO NECESITO IMPRIMIRLOS
        /*  console.log(datos);
        console.log(datos.forms[0].name);
        console.log(datos.abilities);
        console.log(datos.id);
        console.log(datos.types);
        console.log(datos.sprites.other["official-artwork"].front_default); */


        const pokemon = {
                nombre: datos.forms[0].name,
                habilidades: datos.abilities,
                id: datos.id,
                tipos: datos.types,
                imagen: datos.sprites.other["official-artwork"].front_default
            }

        //Imagen :3
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent = `ID: ${pokemon.id}`;
        nombrePokemon.textContent = pokemon.nombre;

        //Habilidades :3
        //console.log(pokemon.habilidades.length);

        let template = ``

        for(let i=0; i < pokemon.habilidades.length; i++){

            const nombreHabilidad = pokemon.habilidades[i].ability.name

            //console.log(nombreHabilidad);
            
            template += `<li class="list-group-item"> ${nombreHabilidad} </li>`
        }

        listaHabilidades.innerHTML = template;

        //Tipos :3
        //console.log(pokemon.tipos);

        let templateTipos = ""

        pokemon.tipos.forEach( (tipo) => {
            const nombreTipo = tipo.type.name
            //console.log(nombreTipo); YA NO ME SIRVE IMPRIMIRLO

            templateTipos += `<li class="list-group-item"> ${nombreTipo} </li>`

        })

        listaTipos.innerHTML = templateTipos;

    } catch(e){

        alert("Pokemon no encontrado")
        
    }
}

//obtenerPokemon(urlPokemon)