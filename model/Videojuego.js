'use strict';
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    titulo: String,
    genero: Array,
    clasificacion: String,
    consola: Array,
    fabricante: String,
    version: Number
});

const gameModel = mongoose.model('videojuegos', gameSchema);
module.exports = gameModel;
