import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { CreateCulturaPlantadaDto } from './dto/create-cultura-plantada.dto/create-cultura-plantada.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Controller('culturas')
export class CulturasController {
  constructor(private readonly culturasService: CulturasService) {}

  @Post()
  async create(@Body() body: any) {
    const dto = plainToInstance(CreateCulturaPlantadaDto, body);
    const errors = await validate(dto);   
    return this.culturasService.create(dto);
  }

  @Get()
  async findAll() {
    return this.culturasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cultura = await this.culturasService.findOne(id);
    if (!cultura) {
      throw new NotFoundException('Cultura não encontrada');
    }
    return cultura;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const dto = plainToInstance(CreateCulturaPlantadaDto, body);
    const errors = await validate(dto);
   
    return this.culturasService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.culturasService.remove(id);
  }
}
