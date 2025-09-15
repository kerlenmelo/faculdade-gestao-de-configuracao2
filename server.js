// server.js
const express = require('express');
const bodyParser = require('body-parser');
const gastosRoutes = require('./src/routes/gastosRoutes');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('<h1>Bem-Vindo à API de Gastos</h1><p>Acesse a lista de gastos em <a href="/api/gastos">/api/gastos</a></p>')
})

// Rota para acessar os gastos
app.use('/api/gastos', gastosRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
