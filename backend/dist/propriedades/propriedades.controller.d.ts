import { PropriedadesService } from './propriedades.service';
export declare class PropriedadesController {
    private readonly propriedadesService;
    constructor(propriedadesService: PropriedadesService);
    create(body: any): Promise<import("./propriedade/propriedade").Propriedade>;
    findAll(): Promise<import("./propriedade/propriedade").Propriedade[]>;
    findOne(id: string): Promise<import("./propriedade/propriedade").Propriedade>;
    update(id: string, body: any): Promise<import("./propriedade/propriedade").Propriedade>;
    remove(id: string): Promise<void>;
}
