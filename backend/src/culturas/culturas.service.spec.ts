import { Test, TestingModule } from '@nestjs/testing';
import { CulturasService } from './culturas.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CulturaPlantada } from './cultura-plantada/cultura-plantada';
import { Safra } from '../safras/safra/safra';
import { NotFoundException } from '@nestjs/common';

describe('CulturasService', () => {
  let service: CulturasService;
  let culturaRepository: any;
  let safraRepository: any;

  beforeEach(async () => {
    culturaRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      delete: jest.fn(),
    };
    safraRepository = {
      findOne: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CulturasService,
        { provide: getRepositoryToken(CulturaPlantada), useValue: culturaRepository },
        { provide: getRepositoryToken(Safra), useValue: safraRepository },
      ],
    }).compile();
    service = module.get<CulturasService>(CulturasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve criar e salvar uma cultura', async () => {
    safraRepository.findOne.mockResolvedValue({ id: 'safra-id' });
    culturaRepository.create.mockReturnValue({ nome: 'Soja', safra: { id: 'safra-id' } });
    culturaRepository.save.mockResolvedValue({ id: 'cultura-id', nome: 'Soja', safra: { id: 'safra-id' } });
    const result = await service.create({ nome: 'Soja', safraId: 'safra-id' } as any);
    expect(culturaRepository.create).toHaveBeenCalled();
    expect(culturaRepository.save).toHaveBeenCalled();
    expect(result).toHaveProperty('id');
  });

  it('deve lançar NotFoundException se safra não existir', async () => {
    safraRepository.findOne.mockResolvedValue(null);
    await expect(service.create({ nome: 'Soja', safraId: 'safra-id' } as any)).rejects.toThrow(NotFoundException);
  });

  it('deve retornar todas as culturas', async () => {
    culturaRepository.find.mockResolvedValue([{ id: 'id' }]);
    const result = await service.findAll();
    expect(result).toEqual([{ id: 'id' }]);
  });

  it('deve retornar uma cultura pelo id', async () => {
    culturaRepository.findOne.mockResolvedValue({ id: 'id' });
    const result = await service.findOne('id');
    expect(result).toEqual({ id: 'id' });
  });

  it('deve atualizar uma cultura', async () => {
    culturaRepository.findOne.mockResolvedValue({ id: 'id' });
    safraRepository.findOne.mockResolvedValue({ id: 'nova-safra' });
    culturaRepository.save.mockResolvedValue({ id: 'id', nome: 'Milho', safra: { id: 'nova-safra' } });
    const result = await service.update('id', { nome: 'Milho', safraId: 'nova-safra' });
    expect(result).toHaveProperty('nome', 'Milho');
    expect(result.safra.id).toBe('nova-safra');
  });

  it('deve remover uma cultura', async () => {
    culturaRepository.delete.mockResolvedValue({ affected: 1 });
    await expect(service.remove('id')).resolves.not.toThrow();
    expect(culturaRepository.delete).toHaveBeenCalledWith('id');
  });
});
