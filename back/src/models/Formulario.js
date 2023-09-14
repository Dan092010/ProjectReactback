// Ejemplo de definición de esquema válido:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formularioSchema = new Schema({
  nombre: String,
  email: String,
  comentarios: String,
});

module.exports = mongoose.model('Formulario', formularioSchema);
