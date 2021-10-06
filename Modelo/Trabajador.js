'use strict';
import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    correo:String,
    constrasena:String,
    nombre: String,
    direccion: String,
    telefono: String
  });

const userModel = model('trabajadores', userSchema);

module.exports = userModel