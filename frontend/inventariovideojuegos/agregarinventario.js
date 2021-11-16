const URLInventario = "http://localhost:3312/api/v1/inventariovideojuego/";
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
agregarVideoJuegosLista();


function agregarEventoRegistrar(){
    const btnRegistrar = document.getElementById("registrarse");
    btnRegistrar.addEventListener("click",agregarTrabajador);
}

async function agregarInventario(){
    const inExistencia = document.getElementById("existencia").value;
    const inVideojuego= document.getElementById("videojuego").value;
    const inRegistro = document.getElementById("registro").value;
   


    const trab = {
        existencia: inExistencia,
        videojuego:inVideojuego,
        registro:inRegistro,
        
    };

    configFetch.body = JSON.stringify(trab);

    const resData= await fetch(URLInventario,configFetch)
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