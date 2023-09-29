const mongoose = require('mongoose');

const cardNosSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  imagen: String,
});

const cardNos = mongoose.model('cardNos', cardNosSchema);

module.exports = cardNos;
