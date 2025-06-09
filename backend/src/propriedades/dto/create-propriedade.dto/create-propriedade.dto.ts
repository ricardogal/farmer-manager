import { IsNotEmpty, IsString, IsNumber, Min, IsUUID } from 'class-validator';

export class CreatePropriedadeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaTotal: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaAgricultavel: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  areaVegetacao: number;

  @IsNotEmpty()
  @IsUUID()
  produtorId: string;
  
  areaCheck: any;
}
