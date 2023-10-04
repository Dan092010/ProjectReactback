const express = require('express');
const router = express.Router();
const { obtenerTarjetas } = require('../controllers/cardInicio');

router.get('/api/cardInicio', obtenerTarjetas);

module.exports = router;