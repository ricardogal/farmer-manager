import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { CreateCulturaPlantadaDto } from './dto/create-cultura-plantada.dto/create-cultura-plantada.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Culturas Plantadas')
@UseGuards(JwtAuthGuard)
@Controller('culturas')
export class CulturasController {
  constructor(private readonly culturasService: CulturasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar cultura plantada' })
  @ApiBody({ schema: { example: { nome: 'Soja', safraId: 'uuid-da-safra' } } })
  @ApiResponse({ status: 201, description: 'Cultura criada com sucesso.' })
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
  @ApiParam({ name: 'id', description: 'ID da cultura plantada', example: 'uuid-da-cultura' })
  async findOne(@Param('id') id: string) {
    const cultura = await this.culturasService.findOne(id);
    if (!cultura) {
      throw new NotFoundException('Cultura não encontrada');
    }
    return cultura;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar cultura plantada' })
  @ApiBody({ schema: { example: { nome: 'Milho', safraId: 'uuid-da-safra' } } })
  @ApiResponse({ status: 200, description: 'Cultura atualizada com sucesso.' })
  async update(@Param('id') id: string, @Body() body: any) {
    const dto = plainToInstance(CreateCulturaPlantadaDto, body);
    const errors = await validate(dto);
   
    return this.culturasService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID da cultura plantada', example: 'uuid-da-cultura' })
  @ApiOperation({ summary: 'Remover cultura plantada' })
  @ApiResponse({ status: 200, description: 'Cultura removida com sucesso.' })
  async remove(@Param('id') id: string) {
    return this.culturasService.remove(id);
  }
}
