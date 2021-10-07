'use strict';

const mongoose = require('mongoose');
const url = 'mongodb+srv://Usuario1:Z92TqjGyIPRqJPrd@equipo4.vjcs4.mongodb.net/CentroVideojuego';
const invGameModel = require('../Modelo/InventarioVideojuegos');

class InventarioVideojuegosControl {

  async conexionBD() {
    return mongoose.connect(url)
      .then(() => console.log('Conexión exitosa'))
      .catch((err) => console.log(err));
  }

  async desconexionBD() {
    mongoose.disconnect(url)
      .then(() => console.log('BD desconectada'))
      .catch((err) => console.log(err));
  }

  async insertarDato(nuevoDato) {
    await this.conexionBD();
    const dato = new invGameModel({
      existencia: nuevoDato.existencia,
      videojuego: nuevoDato.videojuego,
      registro: nuevoDato.registro
    });
    await dato.save();
    console.log('Se agrego correctamente el inventariado de: ' + nuevoDato.videojuego);
    mongoose.disconnect();
    return dato
  }

  async eliminarDato(idBuscar) {
    await this.conexionBD();
    const user = await invGameModel.deleteOne({
      _id: idBuscar
    });
    if (user.deletedCount != 0) {
      console.log('Se elimino correctamente el dato con id: ' + idBuscar);
    } else {
      console.log('No se encontro un dato con id: ' + idBuscar)
    }
    mongoose.disconnect();
    return user;
  }

  async actualizarDato(idBuscar, numExistencias) {
    await this.conexionBD();
    const user = await invGameModel.updateOne({
      _id: idBuscar
    }, {
      $set: {
        existencias: numExistencias
      }
    });
    if (user.modifiedCount != 0) {
      console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + numExistencias);
    } else {
      console.log('El id ' + idBuscar + ' no existe');
    }
    mongoose.disconnect();
    return user;
  }

  async consultarUnDato(idBuscar) {
    await this.conexionBD();
    const user = await invGameModel.findOne({
      _id: idBuscar
    });
    //console.log(user);
    mongoose.disconnect();
    if (user != null) {
      // return new InventarioVideojuego(user._id, user.existencias, user.videojuego, user.registros);
      return user;
    } else {
      return null;
    }

  }

  async consultarTodosDatos() {
    await this.conexionBD();
    const users = await invGameModel.find();
    mongoose.disconnect();
    return users;
  }

}

module.exports = InventarioVideojuegosControl;