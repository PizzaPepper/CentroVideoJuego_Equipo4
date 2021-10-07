'use strict';

const mongoose = require('mongoose');
const url = 'mongodb+srv://Usuario1:Z92TqjGyIPRqJPrd@equipo4.vjcs4.mongodb.net/CentroVideojuego';
const gameModel = require('../Modelo/Videojuego');

class VideojuegosControl {

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
    const dato = new gameModel({
      titulo: nuevoDato.titulo,
      genero: nuevoDato.genero,
      clasificacion: nuevoDato.clasificacion,
      consola: nuevoDato.consola,
      fabricante: nuevoDato.fabricante,
      version: nuevoDato.version
    });

    await dato.save();
    console.log('Se agrego correctamente el dato: ' + nuevoDato.titulo);
    mongoose.disconnect();
    return dato;
  }

  async eliminarDato(idBuscar) {
    await this.conexionBD();
    const user = await gameModel.deleteOne({
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

  async actualizarDato(idBuscar, clasificacionNueva) {
    await this.conexionBD();
    const user = await gameModel.updateOne({
      _id: idBuscar
    }, {
      $set: {
        clasificacion: clasificacionNueva
      }
    });
    if (user.modifiedCount != 0) {
      console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + clasificacionNueva);
    } else {
      console.log('El id ' + idBuscar + ' no existe');
    }
    mongoose.disconnect();
    return user;
  }

  async consultarUnDato(idBuscar) {
    await this.conexionBD();
    const user = await gameModel.findOne({
      _id: idBuscar
    });
    mongoose.disconnect();
    return user;
  }

async consultarTodosDatos() {
  await this.conexionBD();
  const user = await gameModel.find();
  mongoose.disconnect();
  return user;
}

}

module.exports = VideojuegosControl;