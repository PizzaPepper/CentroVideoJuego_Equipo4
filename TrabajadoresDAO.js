'use strict';

const mongoose = require('mongoose');
const url = 'mongodb+srv://Usuario1:Z92TqjGyIPRqJPrd@equipo4.vjcs4.mongodb.net/CentroVideojuego';
const userSchema = mongoose.Schema({
 nombre: String,
 direccion: String,
 telefono: String
});

const userModel = mongoose.model('trabajadores', userSchema);

class TrabajadoresDAO {

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
   nombre: nuevoDato.nombre,
   direccion: nuevoDato.direccion,
   telefono: nuevoDato.telefono
  });
  await dato.save();
  console.log('Se agrego correctamente el dato: ' + nuevoDato.nombre);
  mongoose.disconnect();
 }

 async eliminarDato(idBuscar) {
  this.conexionBD();
  const user = await userModel.deleteOne({ _id: idBuscar });
  console.log('Se elimino correctamente el dato con id: ' + idBuscar);
  mongoose.disconnect();
 }

 async actualizarDato(idBuscar, direccionNuevo) {
  this.conexionBD();
  const user = await userModel.updateOne({ _id: idBuscar }, { $set: { direccion: direccionNuevo } });
  console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + direccionNuevo);
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

module.exports = TrabajadoresDAO;