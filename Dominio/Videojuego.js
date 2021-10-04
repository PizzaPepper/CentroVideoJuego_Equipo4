'use strict';
class Videojuego{
    constructor(_id,titulo,genero,clasificacion,consola,fabricante,version){
        this._id = _id;
        this.titulo = titulo;
        this.genero = genero;
        this.clasificacion = clasificacion;
        this.consola = consola;
        this.fabricante = fabricante;
        this.version = version;
    }
}

module.exports = Videojuego;
