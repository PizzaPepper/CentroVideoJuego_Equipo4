'use strict';

const gameModel = require('../model/Videojuego');

class VideojuegosControl {


  async insertarDato(nuevoDato) {
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
    return dato;
  }

  async eliminarDato(idBuscar) {
    const user = await gameModel.deleteOne({
      _id: idBuscar
    });
    if (user.deletedCount != 0) {
      console.log('Se elimino correctamente el dato con id: ' + idBuscar);
    } else {
      console.log('No se encontro un dato con id: ' + idBuscar)
    }
    return user;
  }

  async actualizarDato(idBuscar, clasificacionNueva) {
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
    return user;
  }

  async consultarUnDato(idBuscar) {
    const user = await gameModel.findOne({
      _id: idBuscar
    });
    return user;
  }

async consultarTodosDatos() {
  const user = await gameModel.find();
  return user;
}

}

module.exports = VideojuegosControl;