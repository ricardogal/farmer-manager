import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtor } from './produtor/produtor';
import { CreateProdutorDto } from './dto/create-produtor.dto/create-produtor.dto';

@Injectable()
export class ProdutoresService {
  constructor(
    @InjectRepository(Produtor)
    private readonly produtorRepository: Repository<Produtor>,
  ) {}

  async create(dto: CreateProdutorDto): Promise<Produtor> {
    const produtor = await this.produtorRepository.findOne({ where: { cpfCnpj: dto.cpfCnpj } });
    if (produtor) throw new ConflictException('Produtor já existe');
    const newProdutor = this.produtorRepository.create(dto);
    return this.produtorRepository.save(newProdutor);
  }

  async findAll(): Promise<Produtor[]> {
    return this.produtorRepository.find({ relations: ['propriedades'] });
  }

  async findOne(id: string): Promise<Produtor | null> {
    return this.produtorRepository.findOne({ where: { id }, relations: ['propriedades'] });
  }

  async update(id: string, dto: CreateProdutorDto): Promise<Produtor> {
    const produtor = await this.findOne(id);
    if (!produtor) throw new NotFoundException('Produtor não encontrado');
    Object.assign(produtor, dto);
    return this.produtorRepository.save(produtor);
  }

  async remove(id: string): Promise<void> {
    await this.produtorRepository.delete(id);
  }
}
