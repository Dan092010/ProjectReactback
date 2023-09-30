const mongoose = require('mongoose');

const cardNosSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const cardNos = mongoose.model('cardNos', cardNosSchema);

module.exports = cardNos;
