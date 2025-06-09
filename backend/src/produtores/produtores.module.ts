import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoresService } from './produtores.service';
import { ProdutoresController } from './produtores.controller';
import { Produtor } from './produtor/produtor';

@Module({
  imports: [TypeOrmModule.forFeature([Produtor])],
  controllers: [ProdutoresController],
  providers: [ProdutoresService],
})
export class ProdutoresModule {}
