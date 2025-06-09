"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoresSchema = exports.propriedadeSchema = void 0;
const Joi = require("joi");
function isValidCpfOrCnpj(value) {
    value = value.replace(/[^0-9]+/g, '');
    if (value.length === 11) {
        if (/^([0-9])\1+$/.test(value))
            return false;
        let sum = 0;
        let rest;
        for (let i = 1; i <= 9; i++)
            sum += parseInt(value.substring(i - 1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11)
            rest = 0;
        if (rest !== parseInt(value.substring(9, 10)))
            return false;
        sum = 0;
        for (let i = 1; i <= 10; i++)
            sum += parseInt(value.substring(i - 1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11)
            rest = 0;
        if (rest !== parseInt(value.substring(10, 11)))
            return false;
        return true;
    }
    else if (value.length === 14) {
        if (/^([0-9])\1+$/.test(value))
            return false;
        let length = value.length - 2;
        let numbers = value.substring(0, length);
        let digits = value.substring(length);
        let sum = 0;
        let pos = length - 7;
        for (let i = length; i >= 1; i--) {
            sum += parseInt(numbers.charAt(length - i)) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== parseInt(digits.charAt(0)))
            return false;
        length = length + 1;
        numbers = value.substring(0, length);
        sum = 0;
        pos = length - 7;
        for (let i = length; i >= 1; i--) {
            sum += parseInt(numbers.charAt(length - i)) * pos--;
            if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== parseInt(digits.charAt(1)))
            return false;
        return true;
    }
    return false;
}
exports.propriedadeSchema = Joi.object({
    nome: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    areaTotal: Joi.number().min(0).required(),
    areaAgricultavel: Joi.number().min(0).required(),
    areaVegetacao: Joi.number().min(0).required(),
    produtorId: Joi.string().uuid().required(),
}).custom((obj, helpers) => {
    if (obj.areaAgricultavel + obj.areaVegetacao > obj.areaTotal) {
        return helpers.error('any.invalid', {
            message: 'A soma das áreas agricultável e de vegetação não pode ultrapassar a área total da fazenda',
        });
    }
    return obj;
}, 'Validação de soma das áreas');
exports.produtoresSchema = Joi.object({
    nome: Joi.string().required(),
    cpfCnpj: Joi.string()
        .required()
        .custom((value, helpers) => {
        if (!isValidCpfOrCnpj(value)) {
            return helpers.error('any.invalid', {
                message: 'CPF ou CNPJ inválido',
            });
        }
        return value;
    }),
});
//# sourceMappingURL=propriedade-joi.schema.js.map