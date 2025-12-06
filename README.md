# API de Gastos

Esta API permite obter, cadastrar e remover registros de gastos.

---

## 🚀 Como Executar a API

1. Clone o repositório ou baixe os arquivos para o seu computador.
2. Execute o comando para instalar as dependências:

```bash
npm install
```

3. Execute o servidor localmente:

```bash
npm start
```

A API estará disponível em **http://localhost:8080**.

---

## 📌 Endpoints

### **GET /api/gastos**

Retorna a lista de gastos registrados.

#### Exemplo de resposta:

```json
[
  { "id": 1, "titulo": "Lanche", "categoria": "Alimentação" },
  { "id": 2, "titulo": "Cinema", "categoria": "Entretenimento" }
]
```

---

### **POST /api/gastos**

Adiciona um novo gasto.  
Envie no corpo da requisição um JSON com os campos `titulo` e `categoria`.

#### Exemplo de requisição:

```json
{
  "titulo": "Supermercado",
  "categoria": "Alimentação"
}
```

#### Exemplo de resposta (201 - Created):

```json
{
  "id": 3,
  "titulo": "Supermercado",
  "categoria": "Alimentação"
}
```

---

### **DELETE /api/gastos/:id**

Remove um gasto existente.

#### Regras:

- Retorna **204** se o gasto for removido com sucesso.
- Retorna **404** se o gasto não existir.
- Retorna **400** se o ID informado for inválido.

#### Exemplo de resposta (404 - Not Found):

```json
{
  "message": "Gasto não encontrado"
}
```

---

## 🧪 Testes Automatizados

Os testes foram implementados com **Jest** e **Supertest**, garantindo o funcionamento dos endpoints principais.

Para executar os testes localmente:

```bash
npm test
```

O relatório de cobertura é exibido automaticamente no terminal.  
A cobertura atual é **100%**, atendendo ao requisito mínimo de **90%**.

---

## ⚙️ Integração Contínua (CI)

O projeto utiliza **GitHub Actions** para integração contínua.  
Dois jobs são executados a cada _push_ ou _pull request_:

1. **Verificação de Estilo (ESLint)**

   - Garante a padronização e a qualidade do código.

2. **Testes Automatizados com Cobertura (Jest)**
   - Executa todos os testes e verifica se a cobertura mínima global (90%) é atendida.

Esses jobs estão definidos no arquivo:  
📄 `.github/workflows/on-push.yml`

---

## 🐳 Imagem Docker

A imagem Docker desta API é construída e publicada automaticamente via GitHub Actions e está disponível no Docker Hub:

👉 **https://hub.docker.com/r/kerlenmelo/faculdade_gc2**

### 📦 Badges

[![Docker Pulls](https://badgen.net/docker/pulls/kerlenmelo/faculdade_gc2)](https://hub.docker.com/r/kerlenmelo/faculdade_gc2)  
[![Docker Image Size](https://badgen.net/docker/size/kerlenmelo/faculdade_gc2)](https://hub.docker.com/r/kerlenmelo/faculdade_gc2)

---

### ▶️ Como executar a API via Docker

Baixe a imagem:

```bash
docker pull kerlenmelo/faculdade_gc2:latest
```

Execute o container:

```bash
docker run -p 8080:8080 kerlenmelo/faculdade_gc2:latest
```

A API ficará disponível em:

```
http://localhost:8080
```

---

### 🔄 Automação de Build e Deploy da Imagem

A imagem é construída e enviada para o Docker Hub automaticamente sempre que a branch `main` é atualizada.  
Esse processo é feito pelo workflow:

📄 `.github/workflows/docker-publish.yml`

Esse workflow contém dois jobs principais:

1. **Construção da Imagem Docker**

   - Usa o `Dockerfile` na raiz do projeto
   - Gera uma imagem leve baseada em `node:20-alpine`

2. **Publicação no Docker Hub**
   - Realiza login via GitHub Secrets
   - Envia a imagem para `kerlenmelo/faculdade_gc2:latest`

---

## 🔐 Proteção da Branch Principal

A branch **main** foi configurada com as seguintes proteções:

- Requer **Pull Request** antes do merge;
- Exige que todos os **commits sejam assinados (GPG)**;
- Bloqueia **force pushes**;
- Exige que os **workflows (`lint` e `test`)** passem com sucesso antes do merge.

Essas regras garantem controle de versão, integridade e qualidade contínua do código.

---

## 🔄 Workflow de Desenvolvimento

O projeto segue o modelo **GitLab Flow**, por sua simplicidade e eficiência no controle de versões.  
Cada nova funcionalidade é desenvolvida em uma **branch específica** (por exemplo, `feature/delete-route`, `feature/ci-workflows`) e integrada à `main` através de um **Pull Request** revisado e testado automaticamente.

---

## 📋 Commits

Todos os commits seguem o padrão **semântico** e são **assinados digitalmente**:

- `feat:` – novas funcionalidades
- `fix:` – correções de bugs
- `test:` – criação ou atualização de testes
- `ci:` – alterações em pipelines e workflows
- `docs:` – atualizações na documentação
- `chore:` – mudanças de configuração ou manutenção

---

## ✅ Conclusão

O projeto **atende integralmente aos requisitos da atividade**, incluindo:

- Testes automatizados com cobertura mínima de 90%
- Workflows de CI com lint e cobertura
- Commits assinados e semânticos
- Branch principal protegida

---

### ✍️ Autor

**Kerlen Melo**  
Disciplina: _Gestão de Configuração 2_  
Instituição: _IFPE – Instituto Federal de Pernambuco_
