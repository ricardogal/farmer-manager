import { Test, TestingModule } from '@nestjs/testing';
import { SafrasService } from './safras.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Safra } from './safra/safra';
import { Propriedade } from '../propriedades/propriedade/propriedade';
import { NotFoundException } from '@nestjs/common';

describe('SafrasService', () => {
  let service: SafrasService;
  let safraRepository: any;
  let propriedadeRepository: any;

  beforeEach(async () => {
    safraRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      delete: jest.fn(),
    };
    propriedadeRepository = {
      findOne: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SafrasService,
        { provide: getRepositoryToken(Safra), useValue: safraRepository },
        { provide: getRepositoryToken(Propriedade), useValue: propriedadeRepository },
      ],
    }).compile();
    service = module.get<SafrasService>(SafrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve criar e salvar uma safra', async () => {
    propriedadeRepository.findOne.mockResolvedValue({ id: 'prop-id' });
    safraRepository.create.mockReturnValue({ ano: '2024', propriedade: { id: 'prop-id' } });
    safraRepository.save.mockResolvedValue({ id: 'safra-id', ano: '2024', propriedade: { id: 'prop-id' } });
    const result = await service.create({ ano: '2024', propriedadeId: 'prop-id' } as any);
    expect(safraRepository.create).toHaveBeenCalled();
    expect(safraRepository.save).toHaveBeenCalled();
    expect(result).toHaveProperty('id');
  });

  it('deve lançar NotFoundException se propriedade não existir', async () => {
    propriedadeRepository.findOne.mockResolvedValue(null);
    await expect(service.create({ ano: '2024', propriedadeId: 'prop-id' } as any)).rejects.toThrow(NotFoundException);
  });

  it('deve retornar todas as safras', async () => {
    safraRepository.find.mockResolvedValue([{ id: 'id' }]);
    const result = await service.findAll();
    expect(result).toEqual([{ id: 'id' }]);
  });

  it('deve retornar uma safra pelo id', async () => {
    safraRepository.findOne.mockResolvedValue({ id: 'id' });
    const result = await service.findOne('id');
    expect(result).toEqual({ id: 'id' });
  });

  it('deve lançar NotFoundException se safra não existir', async () => {
    safraRepository.findOne.mockResolvedValue(null);
    await expect(service.findOne('id')).rejects.toThrow(NotFoundException);
  });

  it('deve atualizar uma safra', async () => {
    safraRepository.findOne.mockResolvedValue({ id: 'id' });
    safraRepository.save.mockResolvedValue({ id: 'id', ano: '2025' });
    const result = await service.update('id', { ano: '2025' });
    expect(result).toHaveProperty('ano', '2025');
  });

  it('deve remover uma safra', async () => {
    safraRepository.delete.mockResolvedValue({ affected: 1 });
    await expect(service.remove('id')).resolves.not.toThrow();
    expect(safraRepository.delete).toHaveBeenCalledWith('id');
  });
});
