# Farmer Manager API

**Acesse a documentação online (Swagger): [https://farmer-manager.onrender.com/api](https://farmer-manager.onrender.com/api)**

Bem-vindo à API de Gestão de Produtores Rurais!

Este projeto foi desenvolvido com foco em qualidade, escalabilidade, clareza e experiência de integração, seguindo as melhores práticas de arquitetura backend.

## 🚀 Tecnologias Utilizadas
- **NestJS** (TypeScript) — Arquitetura robusta, modular e escalável
- **TypeORM** — ORM moderno para integração com PostgreSQL
- **Joi + class-validator** — Validações avançadas e seguras
- **Swagger (OpenAPI)** — Documentação interativa e autoexecutável
- **Docker + Docker Compose** — Deploy e ambiente padronizado
- **Testes automatizados** — Estrutura pronta para unitários e integrados

---

## 📖 Como usar o Swagger

1. **Acesse o Swagger:**
   - Local: [http://localhost:3000/docs](http://localhost:3000/docs)
   - Produção: [https://farmer-manager.onrender.com/api](https://farmer-manager.onrender.com/api)
2. **Faça login:**
   - Use o endpoint `/auth/login` com um usuário válido (exemplo: `admin@farmermanager.com` / `teste123`)
   - Copie o token JWT retornado.
3. **Clique em "Authorize":**
   - No topo direito do Swagger, clique no botão "Authorize" (ícone de cadeado).
   - Cole o token JWT (apenas o token, sem o prefixo "Bearer ").
   - Confirme.
4. **Teste os endpoints protegidos:**
   - Agora você pode testar qualquer rota protegida diretamente pelo Swagger!

---

## 🏗️ Como Executar o Projeto

### Usando Docker (recomendado)

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd farmer-manager
   ```
2. **Configure o ambiente**
   Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
   ```
   DB_HOST=db
   DB_PORT=5432
   DB_USER=postgres
   DB_PASS=postgres
   DB_NAME=farmer_manager
   JWT_SECRET=sua_chave_secreta
   ```
3. **Suba tudo com Docker Compose (dev)**
   ```bash
   docker compose up --build
   ```
   - Hot reload, volumes mapeados, ideal para desenvolvimento.
4. **Acesse o Swagger**
   - [http://localhost:3000/docs](http://localhost:3000/docs)

#### Produção

1. **Configure variáveis de ambiente de produção**
   - Use um arquivo `.env` com as credenciais e configurações do ambiente de produção.
2. **Suba com o compose de produção**
   ```bash
   docker compose -f docker-compose.prod.yml up --build
   ```
   - Imagem enxuta, sem volumes de código, apenas arquivos compilados.
3. **Acesse o Swagger**
   - [http://localhost:3000/api](http://localhost:3000/api)

---

### Rodando Localmente (sem Docker)

1. **Pré-requisitos:**
   - Node.js 20+
   - PostgreSQL 15+
2. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd farmer-manager/backend
   ```
3. **Instale as dependências**
   ```bash
   npm install
   ```
4. **Configure o banco de dados**
   - Crie um banco chamado `farmer_manager` no seu PostgreSQL
   - Ajuste o arquivo `.env` conforme necessário
5. **Rode as migrations**
   ```bash
   npm run migration:run
   ```
6. **Rode o projeto**
   ```bash
   npm run start:dev
   ```
7. **Acesse o Swagger**
   - [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 📚 Exemplos de Payloads (Swagger)

Todos os exemplos de payloads e responses estão disponíveis diretamente na interface do Swagger, tornando a integração e testes extremamente simples e intuitivos.

---

## 📈 Endpoints principais
- `POST /produtores` — Cadastrar produtor
- `GET /produtores` — Listar produtores
- `POST /propriedades` — Cadastrar propriedade
- `GET /propriedades` — Listar propriedades
- `POST /safras` — Cadastrar safra
- `GET /safras` — Listar safras
- `POST /culturas` — Cadastrar cultura plantada
- `GET /culturas` — Listar culturas
- `GET /dashboard/total-fazendas` — Total de fazendas
- `GET /dashboard/total-hectares` — Total de hectares
- `GET /dashboard/pizza-por-estado` — Gráfico por estado
- `GET /dashboard/pizza-por-cultura` — Gráfico por cultura
- `GET /dashboard/pizza-por-uso-solo` — Gráfico por uso do solo
- `GET /health` — Health check da API

---

## 💡 Observações finais
- Todas as validações de negócio são aplicadas (CPF/CNPJ, áreas, relacionamentos).
- O seed cria um produtor, uma propriedade, uma safra e uma cultura de exemplo.
- Acesse o Swagger para explorar e testar todos os endpoints.
- Projeto pronto para produção e fácil de evoluir.

---

> **Desenvolvido com atenção aos detalhes, foco em qualidade e experiência do usuário.**
> 
> Qualquer dev ou integrador conseguirá usar, manter e evoluir este sistema com facilidade. 