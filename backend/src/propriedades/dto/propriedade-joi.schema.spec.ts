import { propriedadeSchema } from './propriedade-joi.schema';

describe('propriedadeSchema', () => {
  it('deve validar uma propriedade válida', () => {
    const result = propriedadeSchema.validate({
      nome: 'Fazenda Exemplo',
      cidade: 'Cidade Exemplo',
      estado: 'MG',
      areaTotal: 100,
      areaAgricultavel: 60,
      areaVegetacao: 40,
      produtorId: 'b3b3b3b3-b3b3-4b3b-b3b3-b3b3b3b3b3b3',
    });
    expect(result.error).toBeUndefined();
  });

  it('deve invalidar quando a soma das áreas excede a área total', () => {
    const result = propriedadeSchema.validate({
      nome: 'Fazenda Exemplo',
      cidade: 'Cidade Exemplo',
      estado: 'MG',
      areaTotal: 100,
      areaAgricultavel: 80,
      areaVegetacao: 30,
      produtorId: 'b3b3b3b3-b3b3-4b3b-b3b3-b3b3b3b3b3b3',
    });
    expect(result.error).toBeDefined();
    expect(result.error?.details[0].context?.message).toContain('A soma das áreas agricultável e de vegetação não pode ultrapassar a área total da fazenda');
  });

  it('deve invalidar campos obrigatórios ausentes', () => {
    const result = propriedadeSchema.validate({});
    expect(result.error).toBeDefined();
  });
}); 