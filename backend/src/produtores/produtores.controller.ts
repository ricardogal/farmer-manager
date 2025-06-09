import { Controller, Post, Get, Put, Delete, Param, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProdutoresService } from './produtores.service';
import { CreateProdutorDto } from './dto/create-produtor.dto/create-produtor.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { produtoresSchema } from 'src/propriedades/dto/propriedade-joi.schema';

@Controller('produtores')
export class ProdutoresController {
  constructor(private readonly produtoresService: ProdutoresService) {}

  @Post()
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
  async findOne(@Param('id') id: string) {
    const produtor = await this.produtoresService.findOne(id);
    if (!produtor) {
      throw new NotFoundException('Produtor não encontrado');
    }
    return produtor;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const dto = plainToInstance(CreateProdutorDto, body);
    const errors = await validate(dto);    
    return this.produtoresService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.produtoresService.remove(id);
  }
}
