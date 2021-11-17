const URLInventario = "http://localhost:3312/api/v1/inventariovideojuego/";
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
consultarInventarios();

async function consultarInventarios(){
    const data= await fetch(URLInventario,configFetch)
    .then(response => response.json());
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML="";
    data.forEach(e=>{
        tbody.innerHTML += agregarFila(e).outerHTML;
    });
}


function agregarFila(data){
    console.log(data);
    const row = document.createElement("tr");
    const colExistencia = document.createElement("td");
    const colVideojuego = document.createElement("td");
    const colRegistro = document.createElement("td");
    
    colVideojuego.innerText=data.videojuego.titulo;
    colExistencia.innerText=data.existencia;
    colRegistro.innerText=data.registro;
    
    row.innerHTML += colVideojuego.outerHTML;
    row.innerHTML += colExistencia.outerHTML;
    row.innerHTML += colRegistro.outerHTML;

    return row;


}

function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menu.html?usuario=${_id}`;
}