import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { ProdutoresService } from './produtores.service';
import { CreateProdutorDto } from './dto/create-produtor.dto/create-produtor.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { produtoresSchema } from 'src/propriedades/dto/propriedade-joi.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Produtor } from './produtor/produtor';

@ApiBearerAuth()
@ApiTags('Produtores')
@UseGuards(JwtAuthGuard)
@Controller('produtores')
export class ProdutoresController {
  constructor(private readonly produtoresService: ProdutoresService) {}

  @Post()
  @ApiOperation({ summary: 'Criar produtor', description: 'Cria um novo produtor rural no sistema.' })
  @ApiBody({ type: CreateProdutorDto, description: 'Dados para criação do produtor' })
  @ApiResponse({ status: 201, description: 'Produtor criado com sucesso.', type: Produtor, schema: { example: { id: 'uuid', nome: 'João da Silva', cpfCnpj: '12345678909', propriedades: [] } } })
  @ApiResponse({ status: 409, description: 'Produtor já existe.' })
  async create(@Body() body: CreateProdutorDto) {        
    const { error, value } = produtoresSchema.validate(body, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.details.map(d => d.message).join(', '));
    }
    return this.produtoresService.create(value);
  }

  @Get()
  @ApiOperation({ summary: 'Listar produtores', description: 'Retorna todos os produtores cadastrados.' })
  @ApiResponse({ status: 200, description: 'Lista de produtores.', type: [Produtor] })
  async findAll() {
    return this.produtoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produtor por ID', description: 'Retorna os dados de um produtor específico.' })
  @ApiParam({ name: 'id', description: 'ID do produtor', example: 'uuid-do-produtor' })
  @ApiResponse({ status: 200, description: 'Produtor encontrado.', type: Produtor })
  @ApiResponse({ status: 404, description: 'Produtor não encontrado.' })
  async findOne(@Param('id') id: string) {
    const produtor = await this.produtoresService.findOne(id);
    if (!produtor) {
      throw new NotFoundException('Produtor não encontrado');
    }
    return produtor;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar produtor', description: 'Atualiza os dados de um produtor existente.' })
  @ApiParam({ name: 'id', description: 'ID do produtor', example: 'uuid-do-produtor' })
  @ApiBody({ type: CreateProdutorDto, description: 'Novos dados do produtor' })
  @ApiResponse({ status: 200, description: 'Produtor atualizado com sucesso.', type: Produtor })
  @ApiResponse({ status: 404, description: 'Produtor não encontrado.' })
  async update(@Param('id') id: string, @Body() body: CreateProdutorDto) {
    const dto = plainToInstance(CreateProdutorDto, body);
    const errors = await validate(dto);    
    return this.produtoresService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover produtor', description: 'Remove um produtor do sistema.' })
  @ApiParam({ name: 'id', description: 'ID do produtor', example: 'uuid-do-produtor' })
  @ApiResponse({ status: 200, description: 'Produtor removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produtor não encontrado.' })
  async remove(@Param('id') id: string) {
    return this.produtoresService.remove(id);
  }
}
