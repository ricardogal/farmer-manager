import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSafraDto {
  @IsNotEmpty()
  @IsString()
  ano: string;
}
