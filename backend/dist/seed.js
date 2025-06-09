"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
const produtor_1 = require("./produtores/produtor/produtor");
const propriedade_1 = require("./propriedades/propriedade/propriedade");
const safra_1 = require("./safras/safra/safra");
const cultura_plantada_1 = require("./culturas/cultura-plantada/cultura-plantada");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const produtorRepo = app.get((0, typeorm_1.getRepositoryToken)(produtor_1.Produtor));
    const propriedadeRepo = app.get((0, typeorm_1.getRepositoryToken)(propriedade_1.Propriedade));
    const safraRepo = app.get((0, typeorm_1.getRepositoryToken)(safra_1.Safra));
    const culturaRepo = app.get((0, typeorm_1.getRepositoryToken)(cultura_plantada_1.CulturaPlantada));
    const count = await produtorRepo.count();
    if (count > 0) {
        console.log('Seed já executado.');
        await app.close();
        return;
    }
    const produtor = produtorRepo.create({ nome: 'Produtor Exemplo', cpfCnpj: '12345678909' });
    await produtorRepo.save(produtor);
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
    const safra = safraRepo.create({ ano: '2024', propriedade });
    await safraRepo.save(safra);
    const cultura = culturaRepo.create({ nome: 'Soja', safra });
    await culturaRepo.save(cultura);
    console.log('Seed executado com sucesso!');
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map