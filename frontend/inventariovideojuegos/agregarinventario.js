const URLInventario = "http://localhost:3312/api/v1/inventariovideojuego/";
const URLTrabajador = "http://localhost:3312/api/v1/trabajador/";
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
agregarLista();


function agregarEventoRegistrar(){
    const btnRegistrar = document.getElementById("registrar");
    btnRegistrar.addEventListener("click",agregarInventario);
}

async function agregarInventario(){
    
    const inVideojuegos = document.getElementById("videojuegos").value;
    const inExistencia = document.getElementById("existencia").value;


    const inv = {
        videojuego:inVideojuegos,
        existencia:inExistencia,
        registro:[{
            fecha:new Date(),
            tipoMovimiento: true,
            idTrabajador: _id
        }]
    };

    configFetch.body = JSON.stringify(inv);

    const resData= await fetch(URLInventario,configFetch)
    .then(res=> res.json());

    alert(resData.status);
}


async function agregarLista(){
    const selectJuegos = document.getElementById("videojuegos");
    selectJuegos.innerHTML = "";
    const data = await obtenerListaJuegos();
    data.forEach(x=>{
        selectJuegos.innerHTML += `<option value="${x._id}">${x.titulo}</option>`;
    });
}

async function obtenerListaJuegos(){
    return await fetch(URLVideojuego,{method:"GET",mode:"cors",headers: {
        'Content-Type': 'application/json'
    }}).then(response => response.json());
}


function agregarEventoRegresar(){
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click",()=>{regresar(_id)});
}

function regresar(_id){
    window.location=`../menu.html?usuario=${_id}`;
}