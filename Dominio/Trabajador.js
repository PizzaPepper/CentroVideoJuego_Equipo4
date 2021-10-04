'use strict';
class Trabajador {
    constructor(_id,nombre,direccion,telefono){
        this._id = _id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

module.exports = Trabajador;