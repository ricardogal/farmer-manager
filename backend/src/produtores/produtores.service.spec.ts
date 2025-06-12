import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoresService } from './produtores.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Produtor } from './produtor/produtor';
import { NotFoundException } from '@nestjs/common';

describe('ProdutoresService', () => {
  let service: ProdutoresService;
  let produtorRepository: any;

  beforeEach(async () => {
    produtorRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProdutoresService,
        { provide: getRepositoryToken(Produtor), useValue: produtorRepository },
      ],
    }).compile();
    service = module.get<ProdutoresService>(ProdutoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve criar e salvar um produtor', async () => {
    produtorRepository.create.mockReturnValue({ nome: 'Produtor', cpfCnpj: '12345678909' });
    produtorRepository.save.mockResolvedValue({ id: 'id', nome: 'Produtor', cpfCnpj: '12345678909' });
    const result = await service.create({ nome: 'Produtor', cpfCnpj: '12345678909' } as any);
    expect(produtorRepository.create).toHaveBeenCalled();
    expect(produtorRepository.save).toHaveBeenCalled();
    expect(result).toHaveProperty('id');
  });

  it('deve retornar todos os produtores', async () => {
    produtorRepository.find.mockResolvedValue([{ id: 'id' }]);
    const result = await service.findAll();
    expect(result).toEqual([{ id: 'id' }]);
  });

  it('deve retornar um produtor pelo id', async () => {
    produtorRepository.findOne.mockResolvedValue({ id: 'id' });
    const result = await service.findOne('id');
    expect(result).toEqual({ id: 'id' });
  });

  it('deve lançar NotFoundException se produtor não existir', async () => {
    produtorRepository.findOne.mockResolvedValue(null);
    await expect(service.findOne('id')).rejects.toThrow(NotFoundException);
  });

  it('deve atualizar um produtor', async () => {
    produtorRepository.findOne.mockResolvedValue({ id: 'id' });
    produtorRepository.save.mockResolvedValue({ id: 'id', nome: 'Novo Nome' });
    const result = await service.update('id', { nome: 'Novo Nome' });
    expect(result).toHaveProperty('nome', 'Novo Nome');
  });

  it('deve remover um produtor', async () => {
    produtorRepository.delete.mockResolvedValue({ affected: 1 });
    await expect(service.remove('id')).resolves.not.toThrow();
    expect(produtorRepository.delete).toHaveBeenCalledWith('id');
  });
});
