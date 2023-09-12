const mongoose = require('mongoose');

const formularioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  comentarios: String,
});

module.exports = mongoose.model('Formulario', formularioSchema);
