import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCulturaPlantadaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsUUID()
  safraId: string;
}
