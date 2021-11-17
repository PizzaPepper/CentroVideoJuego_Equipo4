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
    btnActualizar.addEventListener("click", actualizarInventario);
}

async function actualizarInventario() {
    const inId = document.getElementById("id").value;
    const inExistencia = document.getElementById("existencia").value;
    const update = {
        id:inId,
        existencia: inExistencia
    };
    configFetch.method = "PUT";
    configFetch.body = JSON.stringify(update);
    const resData = await fetch(URLInventario, configFetch)
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
    const inVideojuego = document.getElementById("videojuegos");
    const inExistencia = document.getElementById("existencia");

    inVideojuego.value = data.videojuegos;
    inExistencia.value = data.existencia;
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