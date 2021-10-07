'use strict';
const mongoose = require('mongoose');

const invGameSchema = new mongoose.Schema({
    existencia: Number,
    videojuego: mongoose.Types.ObjectId,
    registro: Array
});

const invGameModel = mongoose.model('inventariovideojuegos', invGameSchema);
module.exports = invGameModel;