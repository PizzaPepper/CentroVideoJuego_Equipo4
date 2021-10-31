const express = require('express');
const controller = require('../controller/VideojuegosControl');
const router = express.Router();

const videojuego = new controller();

router.route("/").get(async (req, res) => {
    const data = await videojuego.consultarTodosDatos();
    res.json(data);
});

router.route("/").post(async (req, res) => {
    const game = {
        titulo: req.body.titulo,
        genero: req.body.genero,
        clasificacion: req.body.clasificacion,
        consola: req.body.consola,
        fabricante: req.body.fabricante,
        version: req.body.version
    };
    
    await videojuego.insertarDato(game);

    res.status(201).json({
        status: 'Agregado!',
        body:game
    });
}).put(async (req, res) => {
    
    const game = {
        id: req.body.id,
        clasificacion: req.body.clasificacion
    };

    const data = await videojuego.actualizarDato(game.id,game.clasificacion);

    res.status(201).json({
        status: 'Actualizado',
        body: data
    });
});

router.route("/:id")
    .get(async (req, res) => {
        const id= req.params.id;
        const data = await videojuego.consultarUnDato(id);
        res.json(data);
    }).delete(async (req, res) => {
        const id= req.params.id;

        const data = await videojuego.eliminarDato(id);
        res.status(201).json({
            status: 'Eliminado',
            body:data
        });
    });

module.exports = router;