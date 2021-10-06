'use strict';

const mongoose = require('mongoose');
const url = 'mongodb+srv://Usuario1:Z92TqjGyIPRqJPrd@equipo4.vjcs4.mongodb.net/CentroVideojuego';
const userModel = require('../Modelo/Trabajador'); 

class TrabajadoresControl {

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
    const dato = new userModel({
      nombre: nuevoDato.nombre,
      direccion: nuevoDato.direccion,
      telefono: nuevoDato.telefono
    });
    await dato.save();
    console.log('Se agrego correctamente el dato: ' + nuevoDato.nombre);
    mongoose.disconnect();
    return dato
  }

  async eliminarDato(idBuscar) {
    await this.conexionBD();
    const user = await userModel.deleteOne({
      _id: idBuscar
    });
    if(user.deletedCount!=0){
      console.log('Se elimino correctamente el dato con id: ' + idBuscar);
    }else{
      console.log('No se encontro un dato con id: '+idBuscar)
    }
    mongoose.disconnect();
    return user;
  }

  //Solo un dato se cambia?
  async actualizarDato(idBuscar, direccionNuevo) {
    await this.conexionBD();
    const user = await userModel.updateOne({
      _id: idBuscar
    }, {
      $set: {
        direccion: direccionNuevo
      }
    });
    if(user.modifiedCount!=0){
      console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + direccionNuevo);
    }else{
      console.log('El id ' + idBuscar + ' no existe');
    }
    mongoose.disconnect();
    return user;
  }

  async consultarUnDato(idBuscar) {
    await this.conexionBD();
    const user = await userModel.findOne({
      _id: idBuscar
    });
    //console.log(user);
    mongoose.disconnect();
    if(user!=null){
      return new Trabajador(user._id,user.nombre,user.direccion,user.telefono);
    }else{
      return null;
    }
    
  }

  async consultarTodosDatos() {
    await this.conexionBD();
    const users = await userModel.find();
    let trabajadores = [];
    users.forEach((user)=>{
      trabajadores.push(
        new Trabajador(
          user._id,
          user.nombre,
          user.direccion,
          user.telefono));
    });
    //console.log(user);
    mongoose.disconnect();
    return trabajadores;
  }

}

module.exports = TrabajadoresControl;