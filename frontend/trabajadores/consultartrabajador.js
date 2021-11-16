const URLTrabajador = "http://localhost:3312/api/v1/trabajador/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

agregarEventoRegresar();
consultarTrabajadores();

async function consultarTrabajadores(){
    const data= await fetch(URLTrabajador,configFetch)
    .then(response => response.json());
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML="";
    data.forEach(e=>{
        tbody.innerHTML += agregarFila(e).outerHTML;
    });
}



function agregarFila(data){
    const row = document.createElement("tr");
    const colNombre = document.createElement("td");
    const colDireccion = document.createElement("td");
    const colTelefono = document.createElement("td");
    const colCorreo = document.createElement("td");
    colNombre.innerText=data.nombre;
    colDireccion.innerText=data.direccion;
    colTelefono.innerText=data.telefono;
    colCorreo.innerText=data.correo;
    row.innerHTML += colNombre.outerHTML;
    row.innerHTML += colDireccion.outerHTML;
    row.innerHTML += colTelefono.outerHTML;
    row.innerHTML += colCorreo.outerHTML;

    return row;




}

function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menu.html?usuario=${_id}`;
}