'use strict';

const invGameModel = require('../model/InventarioVideojuegos');

class InventarioVideojuegosControl {

  async insertarDato(nuevoDato) {
    const dato = new invGameModel({
      existencia: nuevoDato.existencia,
      videojuego: nuevoDato.videojuego,
      registro: nuevoDato.registro
    });
    await dato.save();
    console.log('Se agrego correctamente el inventariado de: ' + nuevoDato.videojuego);
    return dato
  }

  async eliminarDato(idBuscar) {
    const user = await invGameModel.deleteOne({
      _id: idBuscar
    });
    if (user.deletedCount != 0) {
      console.log('Se elimino correctamente el dato con id: ' + idBuscar);
    } else {
      console.log('No se encontro un dato con id: ' + idBuscar)
    }
    return user;
  }

  async actualizarDato(idBuscar, numExistencias) {
    const user = await invGameModel.updateOne({
      _id: idBuscar
    }, {
      $set: {
        existencia: numExistencias
      }
    });
    if (user.modifiedCount != 0) {
      console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + numExistencias);
    } else {
      console.log('El id ' + idBuscar + ' no existe');
    }
    return user;
  }

  async consultarUnDato(idBuscar) {
    const user = await invGameModel.findOne({
      _id: idBuscar
    });
    
    if (user != null) {
      return user;
    } else {
      return null;
    }

  }

  async consultarTodosDatos() {
    const users = await invGameModel.find()
    .populate({path:"videojuego",model:"videojuegos"});
    return users;
  }

}

module.exports = InventarioVideojuegosControl;