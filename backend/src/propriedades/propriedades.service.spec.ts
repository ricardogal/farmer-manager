import { Test, TestingModule } from '@nestjs/testing';
import { PropriedadesService } from './propriedades.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Propriedade } from './propriedade/propriedade';
import { Produtor } from '../produtores/produtor/produtor';
import { NotFoundException } from '@nestjs/common';

describe('PropriedadesService', () => {
  let service: PropriedadesService;
  let produtorRepository: any;
  let propriedadeRepository: any;

  beforeEach(async () => {
    produtorRepository = {
      findOne: jest.fn(),
    };
    propriedadeRepository = {
      create: jest.fn(),
      save: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropriedadesService,
        { provide: getRepositoryToken(Propriedade), useValue: propriedadeRepository },
        { provide: getRepositoryToken(Produtor), useValue: produtorRepository },
      ],
    }).compile();

    service = module.get<PropriedadesService>(PropriedadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve lançar NotFoundException se produtor não existir', async () => {
    produtorRepository.findOne.mockResolvedValue(null);
    await expect(
      service.create({
        nome: 'Fazenda Teste',
        cidade: 'Cidade Teste',
        estado: 'MG',
        areaTotal: 100,
        areaAgricultavel: 60,
        areaVegetacao: 40,
        produtorId: 'fake-id',
      } as any)
    ).rejects.toThrow(NotFoundException);
  });

  it('deve criar e salvar uma propriedade se produtor existir', async () => {
    const produtor = { id: 'produtor-id' };
    produtorRepository.findOne.mockResolvedValue(produtor);
    propriedadeRepository.create.mockReturnValue({ nome: 'Fazenda Teste', produtor });
    propriedadeRepository.save.mockResolvedValue({ id: 'propriedade-id', nome: 'Fazenda Teste', produtor });

    const result = await service.create({
      nome: 'Fazenda Teste',
      cidade: 'Cidade Teste',
      estado: 'MG',
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 40,
      produtorId: 'produtor-id',
    } as any);

    expect(propriedadeRepository.create).toHaveBeenCalledWith({
      nome: 'Fazenda Teste',
      cidade: 'Cidade Teste',
      estado: 'MG',
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 40,
      produtorId: 'produtor-id',
      produtor,
    });
    expect(propriedadeRepository.save).toHaveBeenCalled();
    expect(result).toHaveProperty('id', 'propriedade-id');
  });
});
