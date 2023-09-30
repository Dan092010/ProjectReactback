const cardNos = require('../models/cardNos');

//guardar una tarjeta en la base de datos
async function guardarTarjeta(req, res) {
  try {
    const { titulo, descripcion, imagen } = req.body;

    const nuevaTarjeta = new cardNos({
      titulo,
      descripcion,
      imagen,
    });

    await nuevaTarjeta.save();

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
//obtener todas las tarjetas de la base de datos
async function obtenerTarjetas(req, res) {
  try {
    const tarjetas = await cardNos.find();
    const tarjetasMapeadas = tarjetas.map((tarjeta) => ({
      id: tarjeta._id,
      titulo: tarjeta.titulo,
      descripcion: tarjeta.descripcion,
      imagen: tarjeta.imagen,
    }));
    res.json(tarjetasMapeadas);
  } catch (error) {
    console.error('Error al obtener las tarjetas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = {
  guardarTarjeta, obtenerTarjetas,
};
