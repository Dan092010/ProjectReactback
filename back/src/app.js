const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Formulario = require('./models/Formulario');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb+srv://mela:12345@project.6fzadxx.mongodb.net/?retryWrites=true&w=majority')
  .then(() =>
    app.listen(5000, () => 
      console.log('Servidor ejecutándose en http://localhost:5000')
    )
  )
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Ruta para manejar el envío del formulario
app.post('/api/formulario', async (req, res) => {
  try {
    const formData = req.body;

    // Guardar los datos del formulario en la base de datos
    const nuevoFormulario = new Formulario(formData);
    await nuevoFormulario.save();

    res.status(201).json({ mensaje: 'Formulario enviado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el formulario:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

// Otras rutas y controladores pueden agregarse aquí

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});
