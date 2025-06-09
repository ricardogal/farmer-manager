"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCpfOrCnpj = void 0;
const class_validator_1 = require("class-validator");
let IsCpfOrCnpj = class IsCpfOrCnpj {
    validate(value, args) {
        return this.isValidCpf(value) || this.isValidCnpj(value);
    }
    defaultMessage(args) {
        return 'CPF ou CNPJ inválido';
    }
    isValidCpf(cpf) {
        cpf = cpf.replace(/[^0-9]+/g, '');
        if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf))
            return false;
        let sum = 0;
        let rest;
        for (let i = 1; i <= 9; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11)
            rest = 0;
        if (rest !== parseInt(cpf.substring(9, 10)))
            return false;
        sum = 0;
        for (let i = 1; i <= 10; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11)
            rest = 0;
        if (rest !== parseInt(cpf.substring(10, 11)))
            return false;
        return true;
    }
    isValidCnpj(cnpj) {
        cnpj = cnpj.replace(/[^0-9]+/g, '');
        if (cnpj.length !== 14)
            return false;
        if (/^([0-9])\1+$/.test(cnpj))
            return false;
        let length = cnpj.length - 2;
        let numbers = cnpj.substring(0, length);
        let digits = cnpj.substring(length);
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
        numbers = cnpj.substring(0, length);
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
};
exports.IsCpfOrCnpj = IsCpfOrCnpj;
exports.IsCpfOrCnpj = IsCpfOrCnpj = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isCpfOrCnpj', async: false })
], IsCpfOrCnpj);
//# sourceMappingURL=is-cpf-cnpj.validator.js.map