import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateSafraDto {
  @ApiProperty({ example: '2024', description: 'Ano da safra' })
  @IsNotEmpty()
  @IsString()
  ano: string;

  @ApiProperty({ example: 'uuid-da-propriedade', description: 'ID da propriedade associada' })
  @IsNotEmpty()
  @IsUUID()
  propriedadeId: string;
}
