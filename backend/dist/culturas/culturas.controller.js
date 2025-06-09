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
exports.CulturasController = void 0;
const common_1 = require("@nestjs/common");
const culturas_service_1 = require("./culturas.service");
const create_cultura_plantada_dto_1 = require("./dto/create-cultura-plantada.dto/create-cultura-plantada.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let CulturasController = class CulturasController {
    culturasService;
    constructor(culturasService) {
        this.culturasService = culturasService;
    }
    async create(body) {
        const dto = (0, class_transformer_1.plainToInstance)(create_cultura_plantada_dto_1.CreateCulturaPlantadaDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        return this.culturasService.create(dto);
    }
    async findAll() {
        return this.culturasService.findAll();
    }
    async findOne(id) {
        const cultura = await this.culturasService.findOne(id);
        if (!cultura) {
            throw new common_1.NotFoundException('Cultura não encontrada');
        }
        return cultura;
    }
    async update(id, body) {
        const dto = (0, class_transformer_1.plainToInstance)(create_cultura_plantada_dto_1.CreateCulturaPlantadaDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        return this.culturasService.update(id, dto);
    }
    async remove(id) {
        return this.culturasService.remove(id);
    }
};
exports.CulturasController = CulturasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CulturasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CulturasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CulturasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CulturasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CulturasController.prototype, "remove", null);
exports.CulturasController = CulturasController = __decorate([
    (0, common_1.Controller)('culturas'),
    __metadata("design:paramtypes", [culturas_service_1.CulturasService])
], CulturasController);
//# sourceMappingURL=culturas.controller.js.map