import { Repository } from 'typeorm';
import { Propriedade } from '../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../culturas/cultura-plantada/cultura-plantada';
export declare class DashboardService {
    private readonly propriedadeRepository;
    private readonly culturaRepository;
    constructor(propriedadeRepository: Repository<Propriedade>, culturaRepository: Repository<CulturaPlantada>);
    totalFazendas(): Promise<{
        totalFazendas: number;
    }>;
    totalHectares(): Promise<{
        totalHectares: number;
    }>;
    pizzaPorEstado(): Promise<any[]>;
    pizzaPorCultura(): Promise<any[]>;
    pizzaPorUsoSolo(): Promise<{
        areaAgricultavel: number;
        areaVegetacao: number;
    }>;
}
