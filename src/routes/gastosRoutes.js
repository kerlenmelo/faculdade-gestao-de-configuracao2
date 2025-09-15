// src/routes/gastosRoutes.js
const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastosController');

router.get('/', gastosController.getGastos);

router.post('/', gastosController.addGastos)

module.exports = router;
