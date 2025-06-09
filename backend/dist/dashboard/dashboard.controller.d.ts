import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
