import { Controller, Post, Body, BadRequestException, Delete, Get, NotFoundException, Param, Put, UseGuards } from '@nestjs/common';
import { PropriedadesService } from './propriedades.service';
import { propriedadeSchema } from './dto/propriedade-joi.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Propriedades')
@UseGuards(JwtAuthGuard)
@Controller('propriedades')
export class PropriedadesController {
  constructor(private readonly propriedadesService: PropriedadesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar propriedade' })
  @ApiBody({ schema: { example: { nome: 'Fazenda Exemplo', cidade: 'Cidade Exemplo', estado: 'MG', areaTotal: 100, areaAgricultavel: 60, areaVegetacao: 40, produtorId: 'uuid-do-produtor' } } })
  @ApiResponse({ status: 201, description: 'Propriedade criada com sucesso.' })
  async create(@Body() body: any) {
    const { error, value } = propriedadeSchema.validate(body, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.details.map(d => d.message).join(', '));
    }
    return this.propriedadesService.create(value);
  }


  async findAll() {
    return this.propriedadesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID da propriedade', example: 'uuid-da-propriedade' })
  async findOne(@Param('id') id: string) {
    const propriedade = await this.propriedadesService.findOne(id);
    if (!propriedade) {
      throw new NotFoundException('Propriedade não encontrada');
    }
    return propriedade;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar propriedade' })
  @ApiBody({ schema: { example: { nome: 'Fazenda Atualizada', cidade: 'Cidade Nova', estado: 'SP', areaTotal: 120, areaAgricultavel: 80, areaVegetacao: 40, produtorId: 'uuid-do-produtor' } } })
  @ApiResponse({ status: 200, description: 'Propriedade atualizada com sucesso.' })
  async update(@Param('id') id: string, @Body() body: any) {
    const { error, value } = propriedadeSchema.validate(body, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.details.map(d => d.message).join(', '));
    }
    return this.propriedadesService.update(id, value);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID da propriedade', example: 'uuid-da-propriedade' })
  @ApiOperation({ summary: 'Remover propriedade' })
  @ApiResponse({ status: 200, description: 'Propriedade removida com sucesso.' })
  async remove(@Param('id') id: string) {
    return this.propriedadesService.remove(id);
  }
}
