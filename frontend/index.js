const URL = "http://localhost:3312/api/v1/trabajador/";

const configFetch = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

const app = new Vue({
    el: '#app',
    data: {       
        imagen:'/frontend/img/inicio.png',
        correo:"",
        contra:"",
        nombres:[
            {nombre:'Jorge Eliu Gonzalez Fierro - 00000294494'},
            {nombre:'Juan Carlos Lizarraga Encinas - 00000181661'},
            {nombre:'Bryan Isaac Segoviano Ruiz - 00000186203'},
            {nombre:'Rene Eduardo Hernandez Estrella - 00000181544'}
        ]
    },
    methods: {
        Sesion: ingresarSesion,
    }
});

async function ingresarSesion() {
    
    const validar = await validarUsuario(this.$data.correo, this.$data.contra);

    if(validar!=null){
        window.location=`menu.html?usuario=${validar}`
    }else{
        alert("Validacion denegada");
    }
}
async function validarUsuario(usuario, contra) {
    const data = await fetch(URL, configFetch).then(response => response.json());

    for (let i = 0; i < data.length; i++) {
        if (data[i].correo === usuario) {
            if (data[i].contrasena === contra) return data[i]._id;
        }
    }
    return null;
}

//"rene@yahoo.es";
//"12345";