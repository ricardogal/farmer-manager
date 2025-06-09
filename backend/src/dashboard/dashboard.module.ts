import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Propriedade } from '../propriedades/propriedade/propriedade';
import { CulturaPlantada } from '../culturas/cultura-plantada/cultura-plantada';

@Module({
  imports: [TypeOrmModule.forFeature([Propriedade, CulturaPlantada])],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
