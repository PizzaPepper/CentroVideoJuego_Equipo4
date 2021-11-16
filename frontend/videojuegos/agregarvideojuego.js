const URLVideojuego = "http://localhost:3312/api/v1/videojuego/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
agregarEventoRegistrar();


function agregarEventoRegistrar(){
    const btnRegistrar = document.getElementById("registrarse");
    btnRegistrar.addEventListener("click",agregarVideojuego);
}

async function agregarVideojuego(){
    const inTitulo = document.getElementById("titulo");
    const inGenero = document.getElementById("genero");
    const inClasificacion = document.getElementById("clasificacion");
    const inConsola = document.getElementById("consola");
    const inFabricante = document.getElementById("fabricante");
    const inVersion = document.getElementById("version");


    const trab = {
        titulo: inTitulo,
        genero:inGenero,
        clasificacion:inClasificacion,
        consola:inConsola,
        fabricante:inFabricante,
        version:inVersion
    };

    configFetch.body = JSON.stringify(trab);

    const resData= await fetch(URLVideojuego,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}





function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menu.html?usuario=${_id}`;
}