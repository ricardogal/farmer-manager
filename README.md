<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Farmer Manager API

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
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=farmer_manager
```

### 3. Suba o banco de dados (PostgreSQL) com Docker
```bash
docker compose up db
```

### 4. Instale as dependências e rode o backend
```bash
cd backend
npm install
npm run start:dev
```

### 5. (Opcional) Popule o banco com dados de exemplo
```bash
npm run seed
```

### 6. Acesse a documentação interativa (Swagger)
Abra [http://localhost:3000/api](http://localhost:3000/api) no navegador.

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

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
