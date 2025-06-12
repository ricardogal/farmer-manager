import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { ProdutoresService } from './produtores.service';
import { CreateProdutorDto } from './dto/create-produtor.dto/create-produtor.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { produtoresSchema } from 'src/propriedades/dto/propriedade-joi.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Produtores')
@UseGuards(JwtAuthGuard)
@Controller('produtores')
export class ProdutoresController {
  constructor(private readonly produtoresService: ProdutoresService) {}

  @Post()
  @ApiOperation({ summary: 'Criar produtor' })
  @ApiBody({ schema: { example: { nome: 'João da Silva', cpfCnpj: '12345678909' } } })
  @ApiResponse({ status: 201, description: 'Produtor criado com sucesso.' })
  async create(@Body() body: any) {        
    const { error, value } = produtoresSchema.validate(body, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.details.map(d => d.message).join(', '));
    }

    return this.produtoresService.create(value);
  }

  @Get()
  async findAll() {
    return this.produtoresService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID do produtor', example: 'uuid-do-produtor' })
  async findOne(@Param('id') id: string) {
    const produtor = await this.produtoresService.findOne(id);
    if (!produtor) {
      throw new NotFoundException('Produtor não encontrado');
    }
    return produtor;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar produtor' })
  @ApiBody({ schema: { example: { nome: 'Novo Nome', cpfCnpj: '12345678909' } } })
  @ApiResponse({ status: 200, description: 'Produtor atualizado com sucesso.' })
  async update(@Param('id') id: string, @Body() body: any) {
    const dto = plainToInstance(CreateProdutorDto, body);
    const errors = await validate(dto);    
    return this.produtoresService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID do produtor', example: 'uuid-do-produtor' })
  @ApiOperation({ summary: 'Remover produtor' })
  @ApiResponse({ status: 200, description: 'Produtor removido com sucesso.' })
  async remove(@Param('id') id: string) {
    return this.produtoresService.remove(id);
  }
}
