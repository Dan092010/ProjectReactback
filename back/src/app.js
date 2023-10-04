const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const FormularioRouter = require('./routes/formCon');
const FormRouter = require('./routes/formAl');
const cardNosRouter = require('./routes/cardNos');
const cardInicioRouter = require('./routes/cardInicio');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(FormularioRouter);
app.use(FormRouter);
app.use(cardNosRouter);
app.use(cardInicioRouter);

mongoose
.connect('mongodb+srv://mela:12345@project.6fzadxx.mongodb.net/?retryWrites=true&w=majority')
.then(() =>
    app.listen(5000, () => 
      console.log('Servidor ejecutándose en http://localhost:5000')
    )
  )
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Otras rutas y controladores pueden agregarse aquí

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});