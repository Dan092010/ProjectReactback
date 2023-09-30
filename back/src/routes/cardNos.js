const express = require('express');
const router = express.Router();
const { guardarTarjeta, obtenerTarjetas } = require('../controllers/cardNos');

router.post('/api/cardNos', guardarTarjeta);
router.get('/api/cardNos', obtenerTarjetas);

module.exports = router;