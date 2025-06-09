import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCulturaPlantadaDto {
  @ApiProperty({ example: 'Soja', description: 'Nome da cultura plantada' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ example: 'uuid-da-safra', description: 'ID da safra associada' })
  @IsNotEmpty()
  @IsUUID()
  safraId: string;
}
