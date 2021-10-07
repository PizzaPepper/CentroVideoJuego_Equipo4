'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  correo: String,
  contrasena: String,
  nombre: String,
  direccion: String,
  telefono: String
});

const userModel = mongoose.model('trabajadores', userSchema);
module.exports = userModel