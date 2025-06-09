import { Repository } from 'typeorm';
import { Safra } from './safra/safra';
import { CreateSafraDto } from './dto/create-safra.dto/create-safra.dto';
export declare class SafrasService {
    private readonly safraRepository;
    constructor(safraRepository: Repository<Safra>);
    create(dto: CreateSafraDto): Promise<Safra>;
    findAll(): Promise<Safra[]>;
    findOne(id: string): Promise<Safra | null>;
    update(id: string, dto: CreateSafraDto): Promise<Safra>;
    remove(id: string): Promise<void>;
}
