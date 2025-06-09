"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoresController = void 0;
const common_1 = require("@nestjs/common");
const produtores_service_1 = require("./produtores.service");
const create_produtor_dto_1 = require("./dto/create-produtor.dto/create-produtor.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const propriedade_joi_schema_1 = require("../propriedades/dto/propriedade-joi.schema");
let ProdutoresController = class ProdutoresController {
    produtoresService;
    constructor(produtoresService) {
        this.produtoresService = produtoresService;
    }
    async create(body) {
        const { error, value } = propriedade_joi_schema_1.produtoresSchema.validate(body, { abortEarly: false });
        if (error) {
            throw new common_1.BadRequestException(error.details.map(d => d.message).join(', '));
        }
        return this.produtoresService.create(value);
    }
    async findAll() {
        return this.produtoresService.findAll();
    }
    async findOne(id) {
        const produtor = await this.produtoresService.findOne(id);
        if (!produtor) {
            throw new common_1.NotFoundException('Produtor não encontrado');
        }
        return produtor;
    }
    async update(id, body) {
        const dto = (0, class_transformer_1.plainToInstance)(create_produtor_dto_1.CreateProdutorDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        return this.produtoresService.update(id, dto);
    }
    async remove(id) {
        return this.produtoresService.remove(id);
    }
};
exports.ProdutoresController = ProdutoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProdutoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoresController.prototype, "remove", null);
exports.ProdutoresController = ProdutoresController = __decorate([
    (0, common_1.Controller)('produtores'),
    __metadata("design:paramtypes", [produtores_service_1.ProdutoresService])
], ProdutoresController);
//# sourceMappingURL=produtores.controller.js.map