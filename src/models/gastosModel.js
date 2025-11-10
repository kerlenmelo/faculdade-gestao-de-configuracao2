let gastos = [
  { id: 1, titulo: "Lanche", categoria: "Alimentação" },
  { id: 2, titulo: "Cinema", categoria: "Entretenimento" }
];

function listarGastos() {
  return gastos;
}

function adicionarGasto(novoGasto) {
  gastos.push(novoGasto);
}

function removerGasto(id) {
  const index = gastos.findIndex(g => g.id === id);
  if (index === -1) return false;
  gastos.splice(index, 1);
  return true;
}

module.exports = { listarGastos, adicionarGasto, removerGasto };
