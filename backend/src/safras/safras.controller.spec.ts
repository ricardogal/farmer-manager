import { Test, TestingModule } from '@nestjs/testing';
import { SafrasController } from './safras.controller';

describe('SafrasController', () => {
  let controller: SafrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SafrasController],
    }).compile();

    controller = module.get<SafrasController>(SafrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
