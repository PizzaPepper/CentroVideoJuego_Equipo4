'use strict';
import {Schema,model,Types} from 'mongoose'

    const invGameSchema = new Schema({
        existencias: Number,
        videojuego: Types.ObjectId
    });

    const invGameModel = model('trabajadores', invGameSchema);

module.exports = invGameModel;