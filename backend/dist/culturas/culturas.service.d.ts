import { Repository } from 'typeorm';
import { CulturaPlantada } from './cultura-plantada/cultura-plantada';
import { CreateCulturaPlantadaDto } from './dto/create-cultura-plantada.dto/create-cultura-plantada.dto';
import { Safra } from '../safras/safra/safra';
export declare class CulturasService {
    private readonly culturaRepository;
    private readonly safraRepository;
    constructor(culturaRepository: Repository<CulturaPlantada>, safraRepository: Repository<Safra>);
    create(dto: CreateCulturaPlantadaDto): Promise<CulturaPlantada>;
    findAll(): Promise<CulturaPlantada[]>;
    findOne(id: string): Promise<CulturaPlantada | null>;
    update(id: string, dto: any): Promise<CulturaPlantada>;
    remove(id: string): Promise<void>;
}
