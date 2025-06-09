import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsCpfOrCnpj implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
    private isValidCpf;
    private isValidCnpj;
}
