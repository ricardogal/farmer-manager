import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Produtor } from './produtores/produtor/produtor';
import { Propriedade } from './propriedades/propriedade/propriedade';
import { Safra } from './safras/safra/safra';
import { CulturaPlantada } from './culturas/cultura-plantada/cultura-plantada';
import { User } from './users/user.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const produtorRepo = app.get(getRepositoryToken(Produtor));
  const propriedadeRepo = app.get(getRepositoryToken(Propriedade));
  const safraRepo = app.get(getRepositoryToken(Safra));
  const culturaRepo = app.get(getRepositoryToken(CulturaPlantada));
  const userRepo = app.get(getRepositoryToken(User));

  // Verifica se já existe seed
  const count = await produtorRepo.count();
  if (count > 0) {
    console.log('Seed já executado.');
    await app.close();
    return;
  }

  // Cria produtor
  const produtor = produtorRepo.create({ nome: 'Produtor Exemplo', cpfCnpj: '12345678909' });
  await produtorRepo.save(produtor);

  // Cria propriedade
  const propriedade = propriedadeRepo.create({
    nome: 'Fazenda Exemplo',
    cidade: 'Cidade Exemplo',
    estado: 'MG',
    areaTotal: 100,
    areaAgricultavel: 60,
    areaVegetacao: 40,
    produtor: produtor,
  });
  await propriedadeRepo.save(propriedade);

  // Cria safra
  const safra = safraRepo.create({ ano: '2024', propriedade });
  await safraRepo.save(safra);

  // Cria cultura
  const cultura = culturaRepo.create({ nome: 'Soja', safra });
  await culturaRepo.save(cultura);

  const userCount = await userRepo.count();
  if (userCount === 0) {
    const passwordHash = await bcrypt.hash('teste123', 10);
    await userRepo.save({ email: 'admin@farmermanager.com', password: passwordHash, role: 'admin' });
    console.log('Usuário admin criado: admin@farmermanager.com / teste123');
  }

  console.log('Seed executado com sucesso!');
  await app.close();
}

bootstrap(); 