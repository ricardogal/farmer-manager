import { Repository } from 'typeorm';
import { Propriedade } from './propriedade/propriedade';
import { CreatePropriedadeDto } from './dto/create-propriedade.dto/create-propriedade.dto';
import { Produtor } from '../produtores/produtor/produtor';
export declare class PropriedadesService {
    private readonly propriedadeRepository;
    private readonly produtorRepository;
    constructor(propriedadeRepository: Repository<Propriedade>, produtorRepository: Repository<Produtor>);
    create(dto: CreatePropriedadeDto): Promise<Propriedade>;
    findAll(): Promise<Propriedade[]>;
    findOne(id: string): Promise<Propriedade | null>;
    update(id: string, dto: any): Promise<Propriedade>;
    remove(id: string): Promise<void>;
}
