const URL = "http://localhost:3312/api/v1/trabajador/";
const configFetch = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

const btnIngresar = document.getElementsByClassName("botonIngresar")[0];
btnIngresar.addEventListener("click", ingresarSesion);

async function ingresarSesion() {
    const usuario = document.getElementsByName("txtuser")[0].value;
    const contra = document.getElementsByName("txtpassword")[0].value;

    const validar = await validarUsuario(usuario, contra);

    if(validar!=null){
        window.location=`menu.html?usuario=${validar}`
    }else{
        alert("Validacion denegada");
    }
}

async function validarUsuario(usuario, contra) {
    const data = await fetch(URL, configFetch).then(response => response.json());

    for (let i = 0; i < data.length; i++) {
        if (data[i].correo === usuario){
            if(data[i].contrasena === contra) return data[i]._id;
        }
    }
    return null;
}

function testIniciarSesion(){
    const usuario = document.getElementsByName("txtuser")[0];
    const contra = document.getElementsByName("txtpassword")[0];

    usuario.value="rene@yahoo.es";
    contra.value="12345";

}


testIniciarSesion();

