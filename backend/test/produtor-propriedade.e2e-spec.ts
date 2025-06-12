import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Fluxo Produtor e Propriedade (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('deve criar um produtor e uma propriedade associada', async () => {
    // Cria produtor
    const produtorRes = await request(app.getHttpServer())
      .post('/produtores')
      .send({ nome: 'Produtor Teste', cpfCnpj: '52998224725' })
      .expect(201);
    expect(produtorRes.body).toHaveProperty('id');
    const produtorId = produtorRes.body.id;

    // Cria propriedade
    const propriedadeRes = await request(app.getHttpServer())
      .post('/propriedades')
      .send({
        nome: 'Fazenda Teste',
        cidade: 'Cidade Teste',
        estado: 'MG',
        areaTotal: 100,
        areaAgricultavel: 60,
        areaVegetacao: 40,
        produtorId,
      })
      .expect(201);
    expect(propriedadeRes.body).toHaveProperty('id');
    expect(propriedadeRes.body.produtorId).toBe(produtorId);
  });

  it('deve rejeitar propriedade com soma de áreas inválida', async () => {
    // Cria produtor
    const produtorRes = await request(app.getHttpServer())
      .post('/produtores')
      .send({ nome: 'Produtor Teste 2', cpfCnpj: '04252011000110' })
      .expect(201);
    const produtorId = produtorRes.body.id;

    // Tenta criar propriedade inválida
    await request(app.getHttpServer())
      .post('/propriedades')
      .send({
        nome: 'Fazenda Inválida',
        cidade: 'Cidade Teste',
        estado: 'MG',
        areaTotal: 100,
        areaAgricultavel: 80,
        areaVegetacao: 30,
        produtorId,
      })
      .expect(400);
  });
}); 