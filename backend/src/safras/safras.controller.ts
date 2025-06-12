import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { SafrasService } from './safras.service';
import { CreateSafraDto } from './dto/create-safra.dto/create-safra.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiOperation, ApiBody, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('safras')
export class SafrasController {
  constructor(private readonly safrasService: SafrasService) {}

  @Post()
  async create(@Body() body: any) {
    const dto = plainToInstance(CreateSafraDto, body);
    const errors = await validate(dto);   
    return this.safrasService.create(dto);
  }

  @Get()
  async findAll() {
    return this.safrasService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID da safra', example: 'uuid-da-safra' })
  async findOne(@Param('id') id: string) {
    const safra = await this.safrasService.findOne(id);
    if (!safra) {
      throw new NotFoundException('Safra não encontrada');
    }
    return safra;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar safra' })
  @ApiBody({ schema: { example: { ano: '2025', propriedadeId: 'uuid-da-propriedade' } } })
  @ApiResponse({ status: 200, description: 'Safra atualizada com sucesso.' })
  async update(@Param('id') id: string, @Body() body: any) {
    const dto = plainToInstance(CreateSafraDto, body);
    const errors = await validate(dto);
   
    return this.safrasService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID da safra', example: 'uuid-da-safra' })
  @ApiOperation({ summary: 'Remover safra' })
  @ApiResponse({ status: 200, description: 'Safra removida com sucesso.' })
  async remove(@Param('id') id: string) {
    return this.safrasService.remove(id);
  }
}
