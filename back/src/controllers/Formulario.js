const formModel = require("../models/Formulario");

const formController = {
  async obtenerFormulario(req, res) {
    try {
      const formularios = await formModel.find(); // Obtener todos los formularios
      res.status(200).json(formularios);
    } catch (error) {
      console.error('Error al obtener los formularios:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  },


  async crearFormulario(req, res) {
    try {
      // Extrae los datos del formulario del cuerpo de la solicitud
      const { nombre, email, comentarios } = req.body;
      // Crea una instancia del modelo de formulario con los datos del cuerpo de la solicitud
      const nuevoFormulario = new formModel({
        nombre,
        email,
        comentarios,
      });
      // Guarda el nuevo formulario en la base de datos
      await nuevoFormulario.save();
      res.status(201).json({ mensaje: 'Formulario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el formulario:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  },

  async guardarFormulario(req, res) {
    try {
      const formData = req.body;
      const nuevoFormulario = new formModel(formData);
      await nuevoFormulario.save();
      res.status(201).json({ mensaje: 'Formulario enviado exitosamente' });
    } catch (error) {
      console.error('Error al guardar el formulario:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  },
};

module.exports = formController;
