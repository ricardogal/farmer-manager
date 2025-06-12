import { IsCpfOrCnpj } from './is-cpf-cnpj.validator';

describe('IsCpfOrCnpj', () => {
  const validator = new IsCpfOrCnpj();

  it('deve validar CPFs válidos', () => {
    expect(validator.validate('123.456.789-09', null as any)).toBe(true); // CPF válido
    expect(validator.validate('52998224725', null as any)).toBe(true); // CPF válido
  });

  it('deve invalidar CPFs inválidos', () => {
    expect(validator.validate('111.111.111-11', null as any)).toBe(false); // repetido
    expect(validator.validate('12345678900', null as any)).toBe(false); // dígito errado
    expect(validator.validate('123', null as any)).toBe(false); // muito curto
  });

  it('deve validar CNPJs válidos', () => {
    expect(validator.validate('04.252.011/0001-10', null as any)).toBe(true); // CNPJ válido
    expect(validator.validate('04252011000110', null as any)).toBe(true); // CNPJ válido
  });

  it('deve invalidar CNPJs inválidos', () => {
    expect(validator.validate('11.111.111/1111-11', null as any)).toBe(false); // repetido
    expect(validator.validate('04252011000100', null as any)).toBe(false); // dígito errado
    expect(validator.validate('123', null as any)).toBe(false); // muito curto
  });
}); 