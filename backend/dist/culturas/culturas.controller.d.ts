import { CulturasService } from './culturas.service';
export declare class CulturasController {
    private readonly culturasService;
    constructor(culturasService: CulturasService);
    create(body: any): Promise<import("./cultura-plantada/cultura-plantada").CulturaPlantada>;
    findAll(): Promise<import("./cultura-plantada/cultura-plantada").CulturaPlantada[]>;
    findOne(id: string): Promise<import("./cultura-plantada/cultura-plantada").CulturaPlantada>;
    update(id: string, body: any): Promise<import("./cultura-plantada/cultura-plantada").CulturaPlantada>;
    remove(id: string): Promise<void>;
}
