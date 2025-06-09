import { SafrasService } from './safras.service';
export declare class SafrasController {
    private readonly safrasService;
    constructor(safrasService: SafrasService);
    create(body: any): Promise<import("./safra/safra").Safra>;
    findAll(): Promise<import("./safra/safra").Safra[]>;
    findOne(id: string): Promise<import("./safra/safra").Safra>;
    update(id: string, body: any): Promise<import("./safra/safra").Safra>;
    remove(id: string): Promise<void>;
}
