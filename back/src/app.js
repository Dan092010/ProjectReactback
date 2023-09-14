const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const formRouter = require('./routes/Formulario');

const app = express();

app.use(cors());
app.use(express.json());

app.use(formRouter);

mongoose
.connect('mongodb+srv://mela:12345@project.6fzadxx.mongodb.net/?retryWrites=true&w=majority'
)
.then(() =>
    app.listen(5000, () => 
        console.log('Servidor ejecutandose en http://localhost:5000')   
    )
);