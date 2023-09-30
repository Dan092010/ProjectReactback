const express = require('express');
const router = express.Router();
const Form = require('../models/formAl');


// Ruta para manejar el envío del formulario
router.post('/api/form', async (req, res) => {
  try {
    const formData = req.body;

    // Guardar los datos del formulario en la base de datos
    const nuevoForm = new Form(formData);
    await nuevoForm.save();

    res.status(201).json({ mensaje: 'Formulario enviado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el formulario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

module.exports = router;
