const express = require('express');
const morgan = require("morgan");

const trabajadorRouter = require('./routes/TrabajadorRoutes');
const videojuegoRouter = require('./routes/VideojuegoRouters');
const inventarioVideojuegosRouter = require ('./routes/InventarioVideojuegosRoutes');

const globalErrorHandler = require('./utils/appError');
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routers
app.use('/api/v1/trabajador', trabajadorRouter);
app.use('/api/v1/videojuego', videojuegoRouter);
app.use('/api/v1/inventariovideojuego', inventarioVideojuegosRouter);

app.all('*', (req, resp, next) =>{
    next(new globalErrorHandler(`No se pudo acceder a ${req.originalUrl} en el servidor`, 404));
});

//Global error Handler 
app.use(globalErrorHandler);


module.exports = app;



