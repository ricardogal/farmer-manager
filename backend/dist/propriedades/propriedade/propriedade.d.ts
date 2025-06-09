import { Produtor } from '../../produtores/produtor/produtor';
import { Safra } from '../../safras/safra/safra';
export declare class Propriedade {
    id: string;
    nome: string;
    cidade: string;
    estado: string;
    areaTotal: number;
    areaAgricultavel: number;
    areaVegetacao: number;
    produtor: Produtor;
    safras: Safra[];
}
