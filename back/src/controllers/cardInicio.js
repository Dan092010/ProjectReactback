const cardInicio = require('../models/cardInicio');
 
const carroSeleccionado = require('../models/cardInicio');

async function setCarroSeleccionado(req, res) {
  try {
    const { titulo, descripcion, imagen } = req.body;

    await 
    res.status(201).json({
      id: nuevaTarjeta._id,
      titulo: nuevaTarjeta.titulo,
      descripcion: nuevaTarjeta.descripcion,
      imagen: nuevaTarjeta.imagen,
    });
  } catch (error) {
    console.error('Error al guardar la tarjeta:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}
async function obtenerTarjetas(req, res) {
  try {
    const tarjetas = await cardInicio.find();
    const tarjetasMapeadas = tarjetas.map((tarjeta) => ({
      id: tarjeta._id,
      titulo: tarjeta.titulo,
      descripcion: tarjeta.descripcion,
      precio: tarjeta.precio,
      imagen: tarjeta.imagen,
      linkCompra: tarjeta.linkCompra,
    }));
    res.json(tarjetasMapeadas);
  } catch (error) {
    console.error('Error al obtener las tarjetas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = {
  obtenerTarjetas,
  setCarroSeleccionado
}