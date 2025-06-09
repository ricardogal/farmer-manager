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
exports.SafrasController = void 0;
const common_1 = require("@nestjs/common");
const safras_service_1 = require("./safras.service");
const create_safra_dto_1 = require("./dto/create-safra.dto/create-safra.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let SafrasController = class SafrasController {
    safrasService;
    constructor(safrasService) {
        this.safrasService = safrasService;
    }
    async create(body) {
        const dto = (0, class_transformer_1.plainToInstance)(create_safra_dto_1.CreateSafraDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        return this.safrasService.create(dto);
    }
    async findAll() {
        return this.safrasService.findAll();
    }
    async findOne(id) {
        const safra = await this.safrasService.findOne(id);
        if (!safra) {
            throw new common_1.NotFoundException('Safra não encontrada');
        }
        return safra;
    }
    async update(id, body) {
        const dto = (0, class_transformer_1.plainToInstance)(create_safra_dto_1.CreateSafraDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        return this.safrasService.update(id, dto);
    }
    async remove(id) {
        return this.safrasService.remove(id);
    }
};
exports.SafrasController = SafrasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SafrasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SafrasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SafrasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SafrasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SafrasController.prototype, "remove", null);
exports.SafrasController = SafrasController = __decorate([
    (0, common_1.Controller)('safras'),
    __metadata("design:paramtypes", [safras_service_1.SafrasService])
], SafrasController);
//# sourceMappingURL=safras.controller.js.map