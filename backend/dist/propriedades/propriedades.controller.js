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
exports.PropriedadesController = void 0;
const common_1 = require("@nestjs/common");
const propriedades_service_1 = require("./propriedades.service");
const propriedade_joi_schema_1 = require("./dto/propriedade-joi.schema");
let PropriedadesController = class PropriedadesController {
    propriedadesService;
    constructor(propriedadesService) {
        this.propriedadesService = propriedadesService;
    }
    async create(body) {
        const { error, value } = propriedade_joi_schema_1.propriedadeSchema.validate(body, { abortEarly: false });
        if (error) {
            throw new common_1.BadRequestException(error.details.map(d => d.message).join(', '));
        }
        return this.propriedadesService.create(value);
    }
    async findAll() {
        return this.propriedadesService.findAll();
    }
    async findOne(id) {
        const propriedade = await this.propriedadesService.findOne(id);
        if (!propriedade) {
            throw new common_1.NotFoundException('Propriedade não encontrada');
        }
        return propriedade;
    }
    async update(id, body) {
        const { error, value } = propriedade_joi_schema_1.propriedadeSchema.validate(body, { abortEarly: false });
        if (error) {
            throw new common_1.BadRequestException(error.details.map(d => d.message).join(', '));
        }
        return this.propriedadesService.update(id, value);
    }
    async remove(id) {
        return this.propriedadesService.remove(id);
    }
};
exports.PropriedadesController = PropriedadesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PropriedadesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropriedadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PropriedadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropriedadesController.prototype, "remove", null);
exports.PropriedadesController = PropriedadesController = __decorate([
    (0, common_1.Controller)('propriedades'),
    __metadata("design:paramtypes", [propriedades_service_1.PropriedadesService])
], PropriedadesController);
//# sourceMappingURL=propriedades.controller.js.map