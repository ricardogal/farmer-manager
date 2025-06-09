import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Safra } from './safra/safra';
import { CreateSafraDto } from './dto/create-safra.dto/create-safra.dto';

@Injectable()
export class SafrasService {
  constructor(
    @InjectRepository(Safra)
    private readonly safraRepository: Repository<Safra>,
  ) {}

  async create(dto: CreateSafraDto): Promise<Safra> {
    const safra = this.safraRepository.create(dto);
    return this.safraRepository.save(safra);
  }

  async findAll(): Promise<Safra[]> {
    return this.safraRepository.find({ relations: ['propriedade', 'culturas'] });
  }

  async findOne(id: string): Promise<Safra | null> {
    return this.safraRepository.findOne({ where: { id }, relations: ['propriedade', 'culturas'] });
  }

  async update(id: string, dto: CreateSafraDto): Promise<Safra> {
    const safra = await this.findOne(id);
    if (!safra) throw new NotFoundException('Safra não encontrada');
    Object.assign(safra, dto);
    return this.safraRepository.save(safra);
  }

  async remove(id: string): Promise<void> {
    await this.safraRepository.delete(id);
  }
}
