'use strict';

let TrabajadoresDAO = require('./TrabajadoresDAO.js');
let trabajadoresDao = new TrabajadoresDAO();
let VideojuegosDAO = require('./VideojuegosDAO.js');
let videojuegosDao = new VideojuegosDAO();

let trabajador = {
 nombre: 'Mario',
 direccion: 'Villa Itson',
 telefono: 644444444
};

//Agregar
// trabajadoresDao.insertarDato(trabajador);

//Consultar un dato por id
// trabajadoresDao.consultarUnDato('61581140e0718963ba605db2');

//Consultar todos
// trabajadoresDao.consultarTodosDatos();

//Actualizar, filtro id y actualizar direccion
// trabajadoresDao.actualizarDato('6158128d274db1e6ec4b8652', 'Tepeyac')

//Eliminar mediante id
// trabajadoresDao.eliminarDato('6158109dbd48089070af6c47');

let videojuego = {
 titulo: 'Animal Crossing: New Horizons',
 genero: 'Videojuego de simulación social',
 clasificacion: 'Todas las edades',
 consola: 'Nintendo Switch',
 fabricante: 'Nintendo',
 version: 99.1
};

//Agregar
// videojuegosDao.insertarDato(videojuego);

//Actualizar, filtro id y actualizar consola
// videojuegosDao.actualizarDato('615814bf0bebb84199dd9d21', 'PlayStation - PC');

//Consultar un dato por id
// videojuegosDao.consultarUnDato('615814bf0bebb84199dd9d21');

//Consultar todos
// videojuegosDao.consultarTodosDatos();

//Eliminar
// videojuegosDao.eliminarDato('6159451fed139c389b44e8c0');
