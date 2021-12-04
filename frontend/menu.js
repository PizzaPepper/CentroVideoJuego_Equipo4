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

const  app =  new Vue({
    el: '#app',
    data: {
        NombreTrabajador:"",
        imgTrabajador:'/frontend/img/trabajador.png',
        imgVideojuego:'/frontend/img/videojuego.png',
        imgInventario:'/frontend/img/inventario.png'
    },
    methods: {
        foo: function () {
            alert(this.$data.id);
        },
        async agregar(){
            const nombre = await agregarNombre();
            this.$data.NombreTrabajador = nombre;
        },
        cambiar:cambiarPantalla,
    },
    beforeMount(){
        this.agregar();
    }
});


agregarEventosTrabajadores();
agregarEventosVideojuego();
agregarEventosInventario();

async function agregarNombre(){
    const id = _id;
    const usuario= await fetch(URLTrabajador+id,configFetch)
    .then(response => response.json());
    return usuario.nombre;
}

function cambiarPantalla(dir){
    window.location=`${dir}?usuario=${_id}`;
}
