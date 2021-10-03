'use strict';

const mongoose = require('mongoose');
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
  mongoose.connect(url)
   .then(() => console.log('Conexión exitosa'))
   .catch((err) => console.log(err));
 }

 async desconexionBD() {
  mongoose.disconnect(url)
   .then(() => console.log('BD desconectada'))
   .catch((err) => console.log(err));
 }

 async insertarDato(nuevoDato) {
  this.conexionBD();
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
 }

 async eliminarDato(idBuscar) {
  this.conexionBD();
  const user = await userModel.deleteOne({ _id: idBuscar });
  console.log('Se elimino correctamente el dato con id: ' + idBuscar);
  mongoose.disconnect();
 }

 async actualizarDato(idBuscar, consolaNueva) {
  this.conexionBD();
  const user = await userModel.updateOne({ _id: idBuscar }, { $set: { consola: consolaNueva } });
  console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + consolaNueva);
  mongoose.disconnect();
 }

 async consultarUnDato(idBuscar) {
  this.conexionBD();
  const user = await userModel.findOne({ _id: idBuscar });
  console.log(user);
  mongoose.disconnect();
 }

 async consultarTodosDatos() {
  this.conexionBD();
  const user = await userModel.find();
  console.log(user);
  mongoose.disconnect();
 }

}

module.exports = VideojuegosDAO;