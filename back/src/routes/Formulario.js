// routes/Formulario.js
const express = require('express');
const formController = require('../controllers/Formulario');

const formRouter = express.Router();

// Ruta para obtener todos los formularios
formRouter.get('/formulario', formController.obtenerFormularios);


// Ruta para crear un nuevo formulario
formRouter.post('/formulario', formController.crearFormulario);

// Ruta para guardar un formulario en la base de datos
formRouter.post('/formulario/guardar', formController.guardarFormulario);

module.exports = formRouter;
