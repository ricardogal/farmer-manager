import { Repository } from 'typeorm';
import { Produtor } from './produtor/produtor';
import { CreateProdutorDto } from './dto/create-produtor.dto/create-produtor.dto';
export declare class ProdutoresService {
    private readonly produtorRepository;
    constructor(produtorRepository: Repository<Produtor>);
    create(dto: CreateProdutorDto): Promise<Produtor>;
    findAll(): Promise<Produtor[]>;
    findOne(id: string): Promise<Produtor | null>;
    update(id: string, dto: CreateProdutorDto): Promise<Produtor>;
    remove(id: string): Promise<void>;
}
