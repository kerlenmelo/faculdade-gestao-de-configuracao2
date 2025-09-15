# API de Gastos

Esta API permite obter uma lista de gastos registrados.

## Como Executar a API

1. Clone o repositório ou baixe os arquivos para o seu computador.
2. Execute o comando para instalar as dependências:

```bash
npm install
```

---

## Execute o servidor com o comando:

```bash
npm start
```

A API estará disponível em `http://localhost:8080`.

---

## Endpoints

**GET /api/gastos**

Retorna a lista de gastos registrados.

### Exemplo de resposta:

```bash
[
  { "id": 1, "titulo": "Lanche", "categoria": "Alimentação" },
  { "id": 2, "titulo": "Cinema", "categoria": "Entretenimento" }
]
```

---
