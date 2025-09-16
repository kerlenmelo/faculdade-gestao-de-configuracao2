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

**POST /api/gastos**

Adiciona um novo gasto. Envie no corpo da requisição um JSON com os campos `titulo` e `categoria`.

### Exemplo de requisição:

```bash
{
  "titulo": "Supermercado",
  "categoria": "Alimentação"
}
```

### Exemplo de resposta (quando o gasto é adicionado com sucesso):

```bash
{
  "id": 3,
  "titulo": "Supermercado",
  "categoria": "Alimentação"
}

```

---

## WORKFLOW

O projeto utiliza o GitLab Flow, pois ele possui uma maior simplicidade de uso.Isso permite o controle adequado de versões e facilita o deploy contínuo de novas funcionalidades e correções.

---