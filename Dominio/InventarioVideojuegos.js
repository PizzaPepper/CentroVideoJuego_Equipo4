'use strict';

class InventarioVideojuegos{
    constructor(_id,existencias,disponibilidad,videojuego){
        this._id = _id;
        this.existencias=existencias;
        this.disponibilidad=disponibilidad;
        this.videojuego=videojuego
    }

}

module.exports = InventarioVideojuegos;