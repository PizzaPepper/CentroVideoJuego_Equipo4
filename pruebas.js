'use strict';

let Trabajador = require('./Dominio/Trabajador');
let Videojuego = require('./Dominio/Videojuego') 
let TrabajadoresDAO = require('./DAO/TrabajadoresDAO');
let trabajadoresDao = new TrabajadoresDAO();
let VideojuegosDAO = require('./DAO/VideojuegosDAO');
let videojuegosDao = new VideojuegosDAO();

async function test(){
    //////TRABAJADORES/////////
    console.log("TEST TRABAJADORES");
    //Consultar Todos los trabajadores
    console.log("Consultar todos los trabajadores");
    const dataAll = await trabajadoresDao.consultarTodosDatos();
    console.log(dataAll);

    //Consultar un dato por id
    console.log("Consultar un trabajador en particular");
    const dataOne = await trabajadoresDao.consultarUnDato('615a5a5a607b3c9bf8feb3c1');
    console.log(dataOne);
    
    
    //Agregar Trabajadores
    console.log("Agregar Trabajador");
    const user1 = new Trabajador(null,
                                "Alberto",
                                "Casa Blanca",
                                644258821);
    const user2 = new Trabajador(null,
                                "Sinforiano",
                                "Las Misiones",
                                644252521);
    await trabajadoresDao.insertarDato(user1);
    await trabajadoresDao.insertarDato(user2);
    //Eliminar Trabajador
    console.log("Eliminar Trabajador");
    const id1 = await trabajadoresDao.consultarTodosDatos();
    await trabajadoresDao.eliminarDato(id1[2]._id);
    //Actualizar Trabajador
    console.log("Actualizar Trabajador");
    const id2 = await trabajadoresDao.consultarTodosDatos();
    await trabajadoresDao.actualizarDato(id2[2]._id,"Donde sea");

    //////VIDEOJUEGOS/////////
    console.log('TEST VIDEOJUEGOS')
    //Consultar Todos los videojuegos
    console.log("Consultar todos los videojuegos");
    const dataAll2 = await videojuegosDao.consultarTodosDatos();
    console.log(dataAll2);

    //Consultar un dato por id
    console.log("Consultar un videojuego en particular");
    const dataOne2 = await videojuegosDao.consultarUnDato('615814bf0bebb84199dd9d21');
    console.log(dataOne2);
    
    //Agregar Videojuegos
    console.log("Agregar Videojuegos");
    const juego1 = new Videojuego(null,
        'Fallout New vegas',
        'Accio/Shooter - Aventura',
        '+18',
        'PC - Xbox - Playstation',
        'Bethesda',
        99.5);
    const juego2 = new Videojuego(null,
        'Mother 3',
        'RPG/Aventura',
        '+16',
        'GameBoy Advance',
        'Nintendo',
        100.5);
    await videojuegosDao.insertarDato(juego1);
    await videojuegosDao.insertarDato(juego2);

    //Eliminar Videojuego
    console.log("Eliminar Videojuego");
    const id11 = await videojuegosDao.consultarTodosDatos();
    await videojuegosDao.eliminarDato(id11[2]._id);
    //Actualizar Trabajador
    console.log("Actualizar Videojuego");
    const id22 = await videojuegosDao.consultarTodosDatos();
    await videojuegosDao.actualizarDato(id22[2]._id,"Xbox 720");


}

//test();




/*
let trabajador = {
 nombre: 'Mario',
 direccion: 'Villa Itson',
 telefono: 644444444
};
*/
const trabajador = new Trabajador(null,"Mario","Villa Itson",644444444);

//Agregar
//trabajadoresDao.insertarDato(trabajador);

//Consultar un dato por id
//trabajadoresDao.consultarUnDato('615a5a5a607b3c9bf8feb3c1');

//Consultar todos
//const data = await trabajadoresDao.consultarTodosDatos();
//console.log(data);
//Actualizar, filtro id y actualizar direccion
//trabajadoresDao.actualizarDato('6158128d274db1e6ec4b8652', 'Tepeyac')

// Eliminar mediante id
//trabajadoresDao.eliminarDato('6158109dbd48089070af6c41');

//Actualizar
//trabajadoresDao.actualizarDato('6158128d274db1e6ec4b8650',"Donde sea");


/*
let videojuego = {
 titulo: 'Animal Crossing: New Horizons',
 genero: 'Videojuego de simulación social',
 clasificacion: 'Todas las edades',
 consola: 'Nintendo Switch',
 fabricante: 'Nintendo',
 version: 99.1
};
*/
const videojuego = new Videojuego(null,
                                 'Fallout New vegas',
                                 'Accio/Shooter - Aventura',
                                 '+18',
                                 'PC - Xbox - Playstation',
                                 'Bethesda',
                                 99.5);

//Agregar
//videojuegosDao.insertarDato(videojuego);

//Actualizar, filtro id y actualizar consola
//videojuegosDao.actualizarDato('615814bf0bebb84199dd9d21', 'Xbox - PC');

//Consultar un dato por id
//videojuegosDao.consultarUnDato('615814bf0bebb84199dd9d21');

//Consultar todos
//videojuegosDao.consultarTodosDatos();

//Eliminar
// videojuegosDao.eliminarDato('6159451fed139c389b44e8c0');
