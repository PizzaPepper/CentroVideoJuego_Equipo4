const URLTrabajador = "http://localhost:3312/api/v1/trabajador/";
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
    btnRegistrar.addEventListener("click",agregarTrabajador);
}

async function agregarTrabajador(){
    const inNombre = document.getElementById("nombre").value;
    const inDireccion = document.getElementById("direccion").value;
    const inTelefono = document.getElementById("telefono").value;
    const inCorreo = document.getElementById("correo").value;
    const inContra = document.getElementById("contrasena").value;


    const trab = {
        contrasena:inContra,
        correo:inCorreo,
        nombre:inNombre,
        direccion:inDireccion,
        telefono:inTelefono
    };

    configFetch.body = JSON.stringify(trab);

    const resData= await fetch(URLTrabajador,configFetch)
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