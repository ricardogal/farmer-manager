import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min, IsUUID } from 'class-validator';

export class CreatePropriedadeDto {
  @ApiProperty({ example: 'Fazenda Exemplo', description: 'Nome da fazenda' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Cidade Exemplo', description: 'Cidade da fazenda' })
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ApiProperty({ example: 'MG', description: 'Estado da fazenda' })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({ example: 100, description: 'Área total da fazenda (em hectares)' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaTotal: number;

  @ApiProperty({ example: 60, description: 'Área agricultável (em hectares)' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaAgricultavel: number;

  @ApiProperty({ example: 40, description: 'Área de vegetação (em hectares)' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaVegetacao: number;

  @ApiProperty({ example: 'uuid-do-produtor', description: 'ID do produtor associado' })
  @IsNotEmpty()
  @IsUUID()
  produtorId: string;
  
  areaCheck: any;
}
