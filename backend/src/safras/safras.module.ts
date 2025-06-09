import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SafrasService } from './safras.service';
import { SafrasController } from './safras.controller';
import { Safra } from './safra/safra';

@Module({
  imports: [TypeOrmModule.forFeature([Safra])],
  controllers: [SafrasController],
  providers: [SafrasService],
})
export class SafrasModule {}
