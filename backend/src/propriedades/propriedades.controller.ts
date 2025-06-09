import { Controller, Post, Body, BadRequestException, Delete, Get, NotFoundException, Param, Put } from '@nestjs/common';
import { PropriedadesService } from './propriedades.service';
import { propriedadeSchema } from './dto/propriedade-joi.schema';

@Controller('propriedades')
export class PropriedadesController {
  constructor(private readonly propriedadesService: PropriedadesService) {}

  @Post()
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
  async findOne(@Param('id') id: string) {
    const propriedade = await this.propriedadesService.findOne(id);
    if (!propriedade) {
      throw new NotFoundException('Propriedade não encontrada');
    }
    return propriedade;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const { error, value } = propriedadeSchema.validate(body, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.details.map(d => d.message).join(', '));
    }
    return this.propriedadesService.update(id, value);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.propriedadesService.remove(id);
  }
}
