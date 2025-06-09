import { Test, TestingModule } from '@nestjs/testing';
import { PropriedadesController } from './propriedades.controller';

describe('PropriedadesController', () => {
  let controller: PropriedadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropriedadesController],
    }).compile();

    controller = module.get<PropriedadesController>(PropriedadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
