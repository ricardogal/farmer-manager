import { ProdutoresService } from './produtores.service';
export declare class ProdutoresController {
    private readonly produtoresService;
    constructor(produtoresService: ProdutoresService);
    create(body: any): Promise<import("./produtor/produtor").Produtor>;
    findAll(): Promise<import("./produtor/produtor").Produtor[]>;
    findOne(id: string): Promise<import("./produtor/produtor").Produtor>;
    update(id: string, body: any): Promise<import("./produtor/produtor").Produtor>;
    remove(id: string): Promise<void>;
}
