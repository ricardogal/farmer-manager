import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropriedadesService } from './propriedades.service';
import { PropriedadesController } from './propriedades.controller';
import { Propriedade } from './propriedade/propriedade';
import { Produtor } from '../produtores/produtor/produtor';

@Module({
  imports: [TypeOrmModule.forFeature([Propriedade, Produtor])],
  controllers: [PropriedadesController],
  providers: [PropriedadesService],
})
export class PropriedadesModule {}
