import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Propriedade } from './propriedade/propriedade';
import { CreatePropriedadeDto } from './dto/create-propriedade.dto/create-propriedade.dto';
import { Produtor } from '../produtores/produtor/produtor';

@Injectable()
export class PropriedadesService {
  constructor(
    @InjectRepository(Propriedade)
    private readonly propriedadeRepository: Repository<Propriedade>,
    @InjectRepository(Produtor)
    private readonly produtorRepository: Repository<Produtor>,
  ) {}

  async create(dto: CreatePropriedadeDto): Promise<Propriedade> {
    const produtor = await this.produtorRepository.findOne({ where: { id: dto.produtorId } });
    if (!produtor) throw new NotFoundException('Produtor não encontrado');
    const propriedade = this.propriedadeRepository.create({ ...dto, produtor });
    return this.propriedadeRepository.save(propriedade);
  }

  async findAll(): Promise<Propriedade[]> {
    return this.propriedadeRepository.find({ relations: ['produtor', 'safras'] });
  }

  async findOne(id: string): Promise<Propriedade | null> {
    return this.propriedadeRepository.findOne({ where: { id }, relations: ['produtor', 'safras'] });
  }

  async update(id: string, dto: any): Promise<Propriedade> {
    const propriedade = await this.findOne(id);
    if (!propriedade) throw new NotFoundException('Propriedade não encontrada');
    if (dto.produtorId) {
      const produtor = await this.produtorRepository.findOne({ where: { id: dto.produtorId } });
      if (!produtor) throw new NotFoundException('Produtor não encontrado');
      propriedade.produtor = produtor;
    }
    Object.assign(propriedade, dto);
    return this.propriedadeRepository.save(propriedade);
  }

  async remove(id: string): Promise<void> {
    await this.propriedadeRepository.delete(id);
  }
}
