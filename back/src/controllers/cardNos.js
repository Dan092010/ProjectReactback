const cardNos = require('../models/cardNos'); 

//guardar una tarjeta en la base de datos
async function guardarTarjeta(req, res) {
  try {
    const { titulo, descripcion, imagen } = req.body;
    
    const nuevaTarjeta = new cardNos({
      titulo:'',
      descripcion,
      imagen,
    });

    await nuevaTarjeta.save();

    res.status(201).json({ mensaje: 'Tarjeta guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la tarjeta:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

// Obtener todas las tarjetas
async function obtenerTarjetas(req, res) {
  try {
    const tarjetas = await cardNos.find(); // Encuentra todas las tarjetas en la base de datos
    res.status(200).json(tarjetas);
  } catch (error) {
    console.error('Error al obtener las tarjetas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = {
  guardarTarjeta, obtenerTarjetas,
};
