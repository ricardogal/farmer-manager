import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturasService } from './culturas.service';
import { CulturasController } from './culturas.controller';
import { CulturaPlantada } from './cultura-plantada/cultura-plantada';
import { Safra } from '../safras/safra/safra';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaPlantada, Safra])],
  controllers: [CulturasController],
  providers: [CulturasService],
})
export class CulturasModule {}
