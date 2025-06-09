import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Propriedade } from '../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../culturas/cultura-plantada/cultura-plantada';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Propriedade)
    private readonly propriedadeRepository: Repository<Propriedade>,
    @InjectRepository(CulturaPlantada)
    private readonly culturaRepository: Repository<CulturaPlantada>,
  ) {}

  async totalFazendas() {
    const total = await this.propriedadeRepository.count();
    return { totalFazendas: total };
  }

  async totalHectares() {
    const { sum } = await this.propriedadeRepository
      .createQueryBuilder('propriedade')
      .select('SUM(propriedade.areaTotal)', 'sum')
      .getRawOne();
    return { totalHectares: Number(sum) };
  }

  async pizzaPorEstado() {
    const result = await this.propriedadeRepository
      .createQueryBuilder('propriedade')
      .select('propriedade.estado', 'estado')
      .addSelect('COUNT(*)', 'total')
      .groupBy('propriedade.estado')
      .getRawMany();
    return result;
  }

  async pizzaPorCultura() {
    const result = await this.culturaRepository
      .createQueryBuilder('cultura')
      .select('cultura.nome', 'cultura')
      .addSelect('COUNT(*)', 'total')
      .groupBy('cultura.nome')
      .getRawMany();
    return result;
  }

  async pizzaPorUsoSolo() {
    const result = await this.propriedadeRepository
      .createQueryBuilder('propriedade')
      .select('SUM(propriedade.areaAgricultavel)', 'areaAgricultavel')
      .addSelect('SUM(propriedade.areaVegetacao)', 'areaVegetacao')
      .getRawOne();
    return {
      areaAgricultavel: Number(result.areaAgricultavel),
      areaVegetacao: Number(result.areaVegetacao),
    };
  }
}
