const cardNos = require('../models/cardNos');

// //guardar una tarjeta en la base de datos
// async function guardarTarjeta(req, res) {
//   try {
//     const { titulo, descripcion, imagen } = req.body;

//     const nuevaTarjeta = new cardNos({
//       titulo,
//       descripcion,
//       imagen,
//     });

//     await nuevaTarjeta.save();

//     res.status(201).json({
//       id: nuevaTarjeta._id,
//       titulo: nuevaTarjeta.titulo,
//       descripcion: nuevaTarjeta.descripcion,
//       imagen: nuevaTarjeta.imagen,
//     });
//   } catch (error) {
//     console.error('Error al guardar la tarjeta:', error);
//     res.status(500).json({ mensaje: 'Error interno del servidor' });
//   }
// }
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
//Almacena las cards en mongo(solo sirve para la primera vez)
//      const jason = [
//     {
//        "id": 1,
//        "titulo": "Nuestra misión y nuestros valores",
//       "descripcion": "Nuestra misión consiste en brindarle a nuestros clientes coches exclusivos con responsabilidad y respeto.",
//       "imagen": "./img/logos/Tec1.jpeg"
//      },
//      {
//        "id": 2,
//        "titulo": "Nuestra misión y nuestro enfoque",
//        "descripcion": "Somos un emprendimiento Colombiano que busca mejorar el acceso a los vehículos exoticos y clasicos en nuestro continente.",
//        "imagen": "./img/logos/Tec2.jpeg"
//      }
  
//    ];
//    const data = jason.map((info)=>({
//      titulo: info.titulo,
//      descripcion: info.descripcion,
//      imagen: info.imagen
//  }));
//      await cardNos.insertMany(data);
//      console.log(data);
    res.json(tarjetasMapeadas);
  } catch (error) {
    console.error('Error al obtener las tarjetas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = {
 obtenerTarjetas
};
