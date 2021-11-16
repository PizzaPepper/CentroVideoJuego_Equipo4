const URLInventario = "http://localhost:3312/api/v1/inventariovideojuego/";
const sessionUser = new URLSearchParams(window.location.search);
const _id = sessionUser.get("usuario");
const configFetch = {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};


agregarEventoId();
agregarEventoRegresar();
agregarEventoActualizar();


function agregarEventoActualizar() {
    const btnActualizar = document.getElementById("actualizar");
    btnActualizar.addEventListener("click", actualizarTrabajador);
}

async function actualizarInventario() {
    const inId = document.getElementById("id").value;
    const inDireccion = document.getElementById("direccion").value;
    const update = {
        id:inId,
        direccion: inDireccion
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLTrabajador, configFetch)
        .then(res => res.json());

    alert(resData.status);
}

function agregarEventoId() {
    const inId = document.getElementById("id");
    inId.addEventListener("keyup", agregarCampos)
}

async function agregarCampos(event) {
    const id = event.path[0].value;


    if (!/^ *$/.test(id)) {
        configFetch.method = "GET";
        const data = await fetch(URLInventario + id, configFetch)
            .then(res => res.json())
            .catch(error => null);
        cambiarValores(data);
    }
}

function cambiarValores(data) {
    const inExistencia = document.getElementById("existencia");
    const inVideojuego = document.getElementById("videojuego");
    const inRegistro = document.getElementById("registro");
    
    inExistencia.value = data.existencia;
    inVideojuego.value = data.videojuego;
    inRegistro.value = data.registro;
    
}

function agregarEventoRegresar() {
    const btnRegresar = document.getElementById("cancelar");
    btnRegresar.addEventListener("click", () => {
        regresar(_id)
    });
}

function regresar(_id) {
    window.location = `../menu.html?usuario=${_id}`;
}