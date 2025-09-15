// src/controllers/gastosController.js
const gastos = require('../models/gastosModel');

const getGastos = (req, res) => {
  res.json(gastos); // Retorna todos os gastos
};

const addGastos = (req, res) => {
  const { titulo, categoria } = req.body;
  if (!titulo || !categoria) {
    return res.status(400).json({ message: 'Título e Categoria são obrigatórios.' });
  }

  const newGasto = { id: gastos.length + 1, titulo, categoria };
  gastos.push(newGasto);
  res.status(201).json(newGasto);
};


module.exports = { getGastos, addGastos };
