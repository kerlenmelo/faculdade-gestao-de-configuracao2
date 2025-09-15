// src/controllers/gastosController.js
const gastos = require('../models/gastosModel');

const getGastos = (req, res) => {
  res.json(gastos); // Retorna todos os gastos
};

module.exports = { getGastos };
