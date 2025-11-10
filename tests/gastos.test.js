const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const gastosRoutes = require('../src/routes/gastosRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/gastos', gastosRoutes);

describe('API de Gastos', () => {

  test('Deve listar os gastos (GET /api/gastos)', async () => {
    const res = await request(app).get('/api/gastos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('Deve adicionar um novo gasto (POST /api/gastos)', async () => {
    const novo = { titulo: "Mercado", categoria: "Casa" };
    const res = await request(app).post('/api/gastos').send(novo);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.titulo).toBe("Mercado");
  });
  
  test('Deve retornar 400 se POST /api/gastos for enviado sem título ou categoria', async () => {
    const res = await request(app).post('/api/gastos').send({ categoria: "Casa" }); // sem título
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message');
  });

  test('Deve retornar 404 ao remover gasto inexistente (DELETE /api/gastos/:id)', async () => {
    const res = await request(app).delete('/api/gastos/999');
    expect(res.statusCode).toBe(404);
  });

  test('Deve remover um gasto existente (DELETE /api/gastos/:id)', async () => {
    await request(app).post('/api/gastos').send({ titulo: "Teste", categoria: "Outros" });
    const res = await request(app).delete('/api/gastos/1');
    expect(res.statusCode).toBe(204);
  });

  test('Deve retornar 400 se ID do DELETE não for numérico', async () => {
    const res = await request(app).delete('/api/gastos/abc');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message');
  });
});
