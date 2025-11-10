const { listarGastos, adicionarGasto, removerGasto } = require('../models/gastosModel');

// GET
function getGastos(req, res) {
  res.json(listarGastos());
}

// POST
function postGasto(req, res) {
  const { titulo, categoria } = req.body;
  if (!titulo || !categoria) {
    return res.status(400).json({ message: 'Campos obrigatórios: titulo, categoria' });
  }

  const gastos = listarGastos();
  const novoGasto = { id: gastos.length + 1, titulo, categoria };
  adicionarGasto(novoGasto);
  res.status(201).json(novoGasto);
}

// DELETE
function deleteGasto(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const sucesso = removerGasto(id);
  if (!sucesso) {
    return res.status(404).json({ message: 'Gasto não encontrado' });
  }

  res.status(204).send();
}

module.exports = { getGastos, postGasto, deleteGasto };
