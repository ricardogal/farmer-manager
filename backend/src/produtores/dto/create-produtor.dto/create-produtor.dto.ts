import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsCpfOrCnpj } from '../../../shared/validators/is-cpf-cnpj.validator';

export class CreateProdutorDto {
  @ApiProperty({ example: 'João da Silva', description: 'Nome do produtor rural' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ example: '12345678909', description: 'CPF ou CNPJ válido do produtor' })
  @IsNotEmpty()
  @IsString()
  @Validate(IsCpfOrCnpj)
  cpfCnpj: string;
}
