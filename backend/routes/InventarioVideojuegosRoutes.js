const express = require('express');
const controller = require("../controller/InventarioVideojuegosControl");
const router = express.Router();

const inventariovideojuego = new controller();

router.route("/").get(async (req, res) => {
 const data = await inventariovideojuego.consultarTodosDatos();
 res.json(data);
});

router.route("/").post(async (req, res) => {
 const invVideojuego = {
     existencia: req.body.existencia,
     videojuego: req.body.videojuego,
     registro: req.body.registro
 };
 
 await inventariovideojuego.insertarDato(invVideojuego);

 res.status(201).json({
     status: 'Agregado!',
     body:invVideojuego
 });
}).put(async (req, res) => {
 
 const invVideojuego = {
     id: req.body.id,
     existencia: req.body.existencia
 };

 const data = await inventariovideojuego.actualizarDato(invVideojuego.id,invVideojuego.existencia);

 res.status(201).json({
     status: 'Actualizado',
     body: data
 });
});

router.route("/:id")
 .get(async (req, res) => {
     const id= req.params.id;
     const data = await inventariovideojuego.consultarUnDato(id);
     res.json(data);
 }).delete(async (req, res) => {
     const id= req.params.id;

     const data = await inventariovideojuego.eliminarDato(id);
     res.status(201).json({
         status: 'Eliminado',
         body:data
     });
 });

module.exports = router;