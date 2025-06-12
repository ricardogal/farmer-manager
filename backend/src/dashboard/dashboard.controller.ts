import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-fazendas')
  @Roles('admin')
  async totalFazendas() {
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
