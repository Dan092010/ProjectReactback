const mongoose = require('mongoose');
// const yeison = require("./yeison.json")

const cardInicioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  linkCompra: {
    type: String,
    required: true,
  }
});

const cardInicio = mongoose.model('cardInicio', cardInicioSchema);

// carroSeleccionado.create({
//     titulo: "BMW M1",
//     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti consequuntur inventore minus ea consequatur omnis. Eaque repudiandae amet ad!",
//     precio: 550000,
//     imagen: "./img/productos/BMWM1.PNG",
//     linkCompra: "/alta"
//   })
// console.log(yeison);
// cardInicio.insertMany(yeison);

module.exports = cardInicio;
