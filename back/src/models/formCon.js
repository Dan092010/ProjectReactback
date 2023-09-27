const mongoose = require('mongoose');

const FormularioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  comentarios: String,
});

module.exports = mongoose.model('Formulario', FormularioSchema);
