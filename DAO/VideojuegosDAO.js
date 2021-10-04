'use strict';

const mongoose = require('mongoose');
const Videojuego = require('../Dominio/Videojuego');
const url = 'mongodb+srv://Usuario1:Z92TqjGyIPRqJPrd@equipo4.vjcs4.mongodb.net/CentroVideojuego';
const userSchema = mongoose.Schema({
 titulo: String,
 genero: String,
 clasificacion: String,
 consola: String,
 fabricante: String,
 version: Number
});

const userModel = mongoose.model('videojuegos', userSchema);

class VideojuegosDAO {

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
  const user = await userModel.deleteOne({ _id: idBuscar });
  if(user.deletedCount!=0){
    console.log('Se elimino correctamente el dato con id: ' + idBuscar);
  }else{
    console.log('No se encontro un dato con id: '+idBuscar)
  }
  mongoose.disconnect();
  return user;
 }

 //Solo un dato se cambia?
 async actualizarDato(idBuscar, consolaNueva) {
  await this.conexionBD();
  const user = await userModel.updateOne({ _id: idBuscar }, { $set: { consola: consolaNueva } });
  if(user.modifiedCount!=0){
    console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + consolaNueva);
  }else{
    console.log('El id ' + idBuscar + ' no existe');
  }
  mongoose.disconnect();
  return user;
 }

 async consultarUnDato(idBuscar) {
  await this.conexionBD();
  const user = await userModel.findOne({ _id: idBuscar });
  mongoose.disconnect();
  if(user!=null){
    return new Videojuego(user._id,
                          user.titulo,
                          user.genero,
                          user.clasificacion,
                          user.consola,
                          user.fabricante,
                          user.version);
  }else{
    return null;
  }
 }

 async consultarTodosDatos() {
  await this.conexionBD();
  const user = await userModel.find();
  let videojuegos = [];
  user.forEach(juego => {
    videojuegos.push(
      new Videojuego(
        juego._id,
        juego.titulo,
        juego.genero,
        juego.clasificacion,
        juego.consola,
        juego.fabricante,
        juego.version));
  });
  mongoose.disconnect();
  return videojuegos;
 }

}

module.exports = VideojuegosDAO;