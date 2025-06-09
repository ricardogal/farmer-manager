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

## 🏗️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd farmer-manager
```

### 2. Configure o ambiente
Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
```
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=farmer_manager
```

### 3. Suba tudo com Docker Compose
```bash
docker compose up --build
```

Pronto!
A aplicação, o banco de dados e o seed inicial já estarão prontos para uso.
Acesse o Swagger em: [http://localhost:3000/api](http://localhost:3000/api)
Ou, se estiver usando o deploy online: [https://farmer-manager.onrender.com/api](https://farmer-manager.onrender.com/api)

---

#### Comandos úteis dentro do container (opcional):
Se quiser rodar comandos manuais, entre no container backend:
```bash
docker compose exec backend sh
```
E então:
- Rodar seed novamente: `npm run seed`
- Rodar migrations: `npm run typeorm migration:run`
- Rodar testes: `npm test`

---

## 🧑‍💻 Diferenciais do Projeto
- **Validações robustas**: CPF/CNPJ, áreas, relacionamentos e regras de negócio garantidas tanto no backend quanto na documentação.
- **Documentação autoexecutável**: Teste todos os endpoints diretamente pelo Swagger, sem necessidade de Postman.
- **Arquitetura limpa e escalável**: Separação clara de responsabilidades, fácil manutenção e extensibilidade.
- **Pronto para produção**: Docker, variáveis de ambiente, seed de dados e testes.
- **Código limpo e comentado**: Foco em legibilidade, clareza e boas práticas.

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