const URLTrabajador = "http://localhost:3312/api/v1/trabajador/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
agregarEventoEliminar();


function agregarEventoEliminar(){
    const btnEliminar = document.getElementById("eliminar");
    btnEliminar.addEventListener("click",eliminarTrabajador);
}


async function eliminarTrabajador(){
    const textId = document.getElementById("id").value;

    const resData = await fetch(URLTrabajador+textId,configFetch)
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