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

agregarNombre(_id);
agregarEventosTrabajadores();
agregarEventosVideojuego();
agregarEventosInventario();

async function agregarNombre(id){
    const usuario= await fetch(URLTrabajador+id,configFetch)
    .then(response => response.json());
    
    const txtNombre = document.getElementById("bienvenida");
    txtNombre.innerText = `Bienvenido ${usuario.nombre} !`
}

function agregarEventosTrabajadores(){
    const btnConsultarTrab = document.getElementById('btnConsultarTrab');
    const btnAgregarTrab = document.getElementById('btnAgregarTrab');
    const btnActualizarTrab = document.getElementById('btnActualizarTrab');
    const btnEliminarTrab = document.getElementById('btnEliminarTrab');
    
    btnConsultarTrab.addEventListener("click",()=>{cambiarPantalla("trabajadores/consultartrabajador.html")})
    btnAgregarTrab.addEventListener("click",()=>{cambiarPantalla("trabajadores/agregartrabajador.html")})
    btnActualizarTrab.addEventListener("click",()=>{cambiarPantalla("trabajadores/actualizartrabajador.html")})
    btnEliminarTrab.addEventListener("click",()=>{cambiarPantalla("trabajadores/eliminartrabajador.html")})
}

function agregarEventosVideojuego(){
    const btnConsultarVideojuego = document.getElementById('btnConsultarVideojuegos');
    const btnAgregarVideojuego = document.getElementById('btnAgregarVideojuegos');
    const btnActualizarVideojuego = document.getElementById('btnActualizarVideojuegos');
    const btnEliminarVideojuego = document.getElementById('btnEliminarVideojuegos');
    
    btnConsultarVideojuego.addEventListener("click",()=>{cambiarPantalla("videojuegos/consultarvideojuegos.html")})
    btnAgregarVideojuego.addEventListener("click",()=>{cambiarPantalla("videojuegos/agregarvideojuego.html")})
    btnActualizarVideojuego.addEventListener("click",()=>{cambiarPantalla("videojuegos/actualizarvideojuego.html")})
    btnEliminarVideojuego.addEventListener("click",()=>{cambiarPantalla("videojuegos/eliminarvideojuego.html")})
}

function agregarEventosInventario(){
    const btnConsultarInventario = document.getElementById('btnConsultarInventario');
    const btnAgregarInventario = document.getElementById('btnAgregarInventario');
    const btnActualizarInventario = document.getElementById('btnActualizarInventario');
    const btnEliminarInventario = document.getElementById('btnEliminarInventario');
    
    btnConsultarInventario.addEventListener("click",()=>{cambiarPantalla("inventariovideojuegos/consultarinventario.html")})
    btnAgregarInventario.addEventListener("click",()=>{cambiarPantalla("inventariovideojuegos/agregarinventario.html")})
    btnActualizarInventario.addEventListener("click",()=>{cambiarPantalla("inventariovideojuegos/actualizarinventario.html")})
    btnEliminarInventario.addEventListener("click",()=>{cambiarPantalla("inventariovideojuegos/eliminarinventario.html")})
}

function cambiarPantalla(dir){
    window.location=`${dir}?usuario=${_id}`;
}
