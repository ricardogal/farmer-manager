import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CulturaPlantada } from './cultura-plantada/cultura-plantada';
import { CreateCulturaPlantadaDto } from './dto/create-cultura-plantada.dto/create-cultura-plantada.dto';
import { Safra } from '../safras/safra/safra';

@Injectable()
export class CulturasService {
  constructor(
    @InjectRepository(CulturaPlantada)
    private readonly culturaRepository: Repository<CulturaPlantada>,
    @InjectRepository(Safra)
    private readonly safraRepository: Repository<Safra>,
  ) {}

  async create(dto: CreateCulturaPlantadaDto): Promise<CulturaPlantada> {
    const safra = await this.safraRepository.findOne({ where: { id: dto.safraId } });
    if (!safra) throw new NotFoundException('Safra não encontrada');
    const cultura = this.culturaRepository.create({ ...dto, safra });
    return this.culturaRepository.save(cultura);
  }

  async findAll(): Promise<CulturaPlantada[]> {
    return this.culturaRepository.find({ relations: ['safra'] });
  }

  async findOne(id: string): Promise<CulturaPlantada | null> {
    return this.culturaRepository.findOne({ where: { id }, relations: ['safra'] });
  }

  async update(id: string, dto: any): Promise<CulturaPlantada> {
    const cultura = await this.findOne(id);
    if (!cultura) throw new NotFoundException('Cultura não encontrada');
    if (dto.safraId) {
      const safra = await this.safraRepository.findOne({ where: { id: dto.safraId } });
      if (!safra) throw new NotFoundException('Safra não encontrada');
      cultura.safra = safra;
    }
    Object.assign(cultura, dto);
    return this.culturaRepository.save(cultura);
  }

  async remove(id: string): Promise<void> {
    await this.culturaRepository.delete(id);
  }
}
