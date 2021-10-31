const express = require('express');
const controller = require("../controller/TrabajadoresControl");
const router = express.Router();
const middleware = require("../middleware/trabajadorMiddleware")
const trabajador = new controller();


router.route("/").get(async (req, res) => {

    const data = await trabajador.consultarTodosDatos();

    res.json(data);
});

router.route("/").post(async (req, res) => {
    const user = {
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    };

    await trabajador.insertarDato(user);
    delete user.contrasena
    res.status(201).json({
        status: 'Agregado!',
        body: user
    });
}).put(async (req, res) => {

    const user = {
        id: req.body.id,
        direccion: req.body.direccion
    };

    const data = await trabajador.actualizarDato(user.id, user.direccion);

    res.status(201).json({
        status: 'Actualizado',
        body: data
    });
});



router.route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;

        const data = await trabajador.consultarUnDato(id);

        res.json(data);
    }).delete(async (req, res) => {

        const id = req.params.id;

        const data = await trabajador.eliminarDato(id);

        res.status(201).json({
            status: 'Eliminado',
            body: data
        });
    });

module.exports = router;