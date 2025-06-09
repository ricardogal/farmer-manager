import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-fazendas')
  totalFazendas() {
    return this.dashboardService.totalFazendas();
  }

  @Get('total-hectares')
  totalHectares() {
    return this.dashboardService.totalHectares();
  }

  @Get('pizza-por-estado')
  pizzaPorEstado() {
    return this.dashboardService.pizzaPorEstado();
  }

  @Get('pizza-por-cultura')
  pizzaPorCultura() {
    return this.dashboardService.pizzaPorCultura();
  }

  @Get('pizza-por-uso-solo')
  pizzaPorUsoSolo() {
    return this.dashboardService.pizzaPorUsoSolo();
  }
}
