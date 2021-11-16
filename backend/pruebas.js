'use strict';

let TrabajadoresControl = require('./Control/TrabajadoresControl');
let trabajadoresControl = new TrabajadoresControl();
let VideojuegosControl = require('./Control/VideojuegosControl');
let videojuegosControl = new VideojuegosControl();
let InventarioVideojuegosControl = require('./Control/InventarioVideojuegosControl');
let inventarioVideojuegosControl = new InventarioVideojuegosControl();

async function test() {

    // //////TRABAJADORES/////////

    // console.log("TEST TRABAJADORES");
    // //Consultar Todos los trabajadores
    // console.log("Consultar todos los trabajadores");
    // const dataAll = await trabajadoresControl.consultarTodosDatos();
    // console.log(dataAll);

    // //Consultar un dato por id
    // console.log("Consultar un trabajador en particular");
    // const dataOne = await trabajadoresControl.consultarUnDato('615a6e5f1f5a00ec2d11c208');
    // console.log(dataOne);


    // //Agregar Trabajadores
    // console.log("Agregar Trabajador");
    // const user1 = {
    //     correo: 'bryan@yahoo.es',
    //     contrasena: '1234',
    //     nombre: 'bryan',
    //     direccion: 'villa viilla',
    //     telefono: '6444444'
    // }
    // const user2 = new Trabajador(null,
    //                             "Sinforiano",
    //                             "Las Misiones",
    //                             644252521);
    // await trabajadoresControl.insertarDato(user1);
    // await trabajadoresDao.insertarDato(user2);

    // //Eliminar Trabajador
    // console.log("Eliminar Trabajador");
    // const id1 = await trabajadoresControl.consultarTodosDatos();
    // await trabajadoresControl.eliminarDato(id1[2]._id);

    // //Actualizar Trabajador
    // console.log("Actualizar Trabajador");
    // const id2 = await trabajadoresControl.consultarTodosDatos();
    // await trabajadoresControl.actualizarDato(id2[2]._id,"Dtuki");

    // //////VIDEOJUEGOS/////////

    // console.log('TEST VIDEOJUEGOS')
    // //Consultar Todos los videojuegos
    // console.log("Consultar todos los videojuegos");
    // const dataAll2 = await videojuegosControl.consultarTodosDatos();
    // console.log(dataAll2);

    // //Consultar un dato por id
    // console.log("Consultar un videojuego en particular");
    // const dataOne2 = await videojuegosControl.consultarUnDato('615a6e6f1f5a00ec2d11c212');
    // console.log(dataOne2);

    // //Agregar Videojuegos
    // console.log("Agregar Videojuegos");
    // const juego1 = {
    //     titulo: 'Fallout New vegas',
    //     genero: ['Accio/Shooter', 'Aventura'],
    //     clasificacion:'+18',
    //     consola: ['PC', 'Xbox', 'PlayStation'],
    //     fabricante: 'Bethesda',
    //     version: 99.5};
    // const juego2 = new Videojuego(null,
    //     'Mother 3',
    //     'RPG/Aventura',
    //     '+16',
    //     'GameBoy Advance',
    //     'Nintendo',
    //     100.5);
    // await videojuegosControl.insertarDato(juego1);
    // await videojuegosControl.insertarDato(juego2);

    // //Eliminar Videojuego
    // console.log("Eliminar Videojuego");
    // const id11 = await videojuegosControl.consultarTodosDatos();
    // await videojuegosControl.eliminarDato(id11[3]._id);

    // //Actualizar Trabajador
    // console.log("Actualizar Videojuego");
    // const id22 = await videojuegosControl.consultarTodosDatos();
    // await videojuegosControl.actualizarDato(id22[2]._id,"+3");

    // //////INVENTARIO VIDEOJUEGOS/////////

    //Agregar una entidad
    // const trabajador = await trabajadoresControl.consultarUnDato('615dfed69e920580f3e43f2d');
    // const videojuego = await videojuegosControl.consultarUnDato('6159450e4d6470d34a78cd3f');

    // const registro1 = {
    //     fecha: new Date(),
    //     tipoMovimiento: true,
    //     idTrabajador: trabajador._id
    // }
    // console.log(registro1);
    // const inventario1 = {
    //     existencia: '10',
    //     videojuego: videojuego._id,
    //     registro: [registro1]
    // };
    // console.log(inventario1);
    // await inventarioVideojuegosControl.insertarDato(inventario1);

    // //consultar todos
    // const dataAll = await inventarioVideojuegosControl.consultarTodosDatos();
    // console.log(dataAll);

    //consultar uno
    // const dataOne = await inventarioVideojuegosControl.consultarUnDato('615e0ba1ec75a1d62bc07ea1');
    // console.log(dataOne);

    //borrar
    // const id1 = await inventarioVideojuegosControl.consultarTodosDatos();
    // await inventarioVideojuegosControl.eliminarDato(id1[0]._id);

}

test();




// /*
// let trabajador = {
//  nombre: 'Mario',
//  direccion: 'Villa Itson',
//  telefono: 644444444
// };
// */

// const trabajador ={
//     nombre: 'Sinforiano',
//     direccion: 'Las Palmas',
//     telefono: 642432555
// }

// //Agregar
// //trabajadoresDao.insertarDato(trabajador);

// //Consultar un dato por id
// //trabajadoresDao.consultarUnDato('615a5a5a607b3c9bf8feb3c1');

// //Consultar todos
// //const data = await trabajadoresDao.consultarTodosDatos();
// //console.log(data);
// //Actualizar, filtro id y actualizar direccion
// //trabajadoresDao.actualizarDato('6158128d274db1e6ec4b8652', 'Tepeyac')

// // Eliminar mediante id
// //trabajadoresDao.eliminarDato('6158109dbd48089070af6c41');

// //Actualizar
// //trabajadoresDao.actualizarDato('6158128d274db1e6ec4b8650',"Donde sea");


// /*
// let videojuego = {
//  titulo: 'Animal Crossing: New Horizons',
//  genero: 'Videojuego de simulación social',
//  clasificacion: 'Todas las edades',
//  consola: 'Nintendo Switch',
//  fabricante: 'Nintendo',
//  version: 99.1
// };
// */
// const videojuego = {
//     titulo: 'Fallout',
//     genero: 'Accion,Aventura,RPG',
//     clasificacion: '+18',
//     consola: 'PC,Xbox,Playstation',
//     fabricante: 'Bethesda',
//     version: 92.1
// }

// //Agregar
// //videojuegosDao.insertarDato(videojuego);

// //Actualizar, filtro id y actualizar consola
// //videojuegosDao.actualizarDato('615814bf0bebb84199dd9d21', 'Xbox - PC');

// //Consultar un dato por id
// //videojuegosDao.consultarUnDato('615814bf0bebb84199dd9d21');

// //Consultar todos
// //videojuegosDao.consultarTodosDatos();

// //Eliminar
// // videojuegosDao.eliminarDato('6159451fed139c389b44e8c0');
