const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  categoria: String,
  descripcionCorta: String,
  descripcionLarga: String,
  envioSinCargo: Boolean,
  edadDesde: Number,
  edadHasta: Number,
});

module.exports = mongoose.model('formAl', FormSchema);
