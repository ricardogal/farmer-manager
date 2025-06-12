import { Test, TestingModule } from '@nestjs/testing';
import { DashboardService } from './dashboard.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Propriedade } from '../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../culturas/cultura-plantada/cultura-plantada';

describe('DashboardService', () => {
  let service: DashboardService;
  let propriedadeRepository: any;
  let culturaRepository: any;

  beforeEach(async () => {
    propriedadeRepository = {
      count: jest.fn(),
      createQueryBuilder: jest.fn(),
    };
    culturaRepository = {
      createQueryBuilder: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DashboardService,
        { provide: getRepositoryToken(Propriedade), useValue: propriedadeRepository },
        { provide: getRepositoryToken(CulturaPlantada), useValue: culturaRepository },
      ],
    }).compile();
    service = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar o total de fazendas', async () => {
    propriedadeRepository.count.mockResolvedValue(5);
    const result = await service.totalFazendas();
    expect(result).toEqual({ totalFazendas: 5 });
  });

  it('deve retornar o total de hectares', async () => {
    const qb = { select: jest.fn().mockReturnThis(), getRawOne: jest.fn().mockResolvedValue({ sum: 123 }) };
    propriedadeRepository.createQueryBuilder.mockReturnValue(qb);
    const result = await service.totalHectares();
    expect(result).toEqual({ totalHectares: 123 });
  });

  it('deve retornar pizza por estado', async () => {
    const qb = { select: jest.fn().mockReturnThis(), addSelect: jest.fn().mockReturnThis(), groupBy: jest.fn().mockReturnThis(), getRawMany: jest.fn().mockResolvedValue([{ estado: 'MG', total: 2 }]) };
    propriedadeRepository.createQueryBuilder.mockReturnValue(qb);
    const result = await service.pizzaPorEstado();
    expect(result).toEqual([{ estado: 'MG', total: 2 }]);
  });

  it('deve retornar pizza por cultura', async () => {
    const qb = { select: jest.fn().mockReturnThis(), addSelect: jest.fn().mockReturnThis(), groupBy: jest.fn().mockReturnThis(), getRawMany: jest.fn().mockResolvedValue([{ cultura: 'Soja', total: 3 }]) };
    culturaRepository.createQueryBuilder.mockReturnValue(qb);
    const result = await service.pizzaPorCultura();
    expect(result).toEqual([{ cultura: 'Soja', total: 3 }]);
  });

  it('deve retornar pizza por uso do solo', async () => {
    const qb = { select: jest.fn().mockReturnThis(), addSelect: jest.fn().mockReturnThis(), getRawOne: jest.fn().mockResolvedValue({ areaAgricultavel: 50, areaVegetacao: 70 }) };
    propriedadeRepository.createQueryBuilder.mockReturnValue(qb);
    const result = await service.pizzaPorUsoSolo();
    expect(result).toEqual({ areaAgricultavel: 50, areaVegetacao: 70 });
  });
});
