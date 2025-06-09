import { Propriedade } from '../../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../../culturas/cultura-plantada/cultura-plantada';
export declare class Safra {
    id: string;
    ano: string;
    propriedade: Propriedade;
    culturas: CulturaPlantada[];
}
