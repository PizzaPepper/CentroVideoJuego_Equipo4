'use strict';
import {Schema,model} from 'mongoose'

const gameSchema = new Schema({
    titulo: String,
    genero: Array,
    clasificacion: String,
    consola: Array,
    fabricante: String,
    version: Number
});

const gameModel = model('videojuegos', gameSchema);
module.exports = gameModel;
