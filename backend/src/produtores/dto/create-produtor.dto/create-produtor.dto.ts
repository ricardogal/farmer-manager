import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsCpfOrCnpj } from '../../../shared/validators/is-cpf-cnpj.validator';

export class CreateProdutorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Validate(IsCpfOrCnpj)
  cpfCnpj: string;
}
