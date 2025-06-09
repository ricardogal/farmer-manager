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
exports.SafrasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const safra_1 = require("./safra/safra");
let SafrasService = class SafrasService {
    safraRepository;
    constructor(safraRepository) {
        this.safraRepository = safraRepository;
    }
    async create(dto) {
        const safra = this.safraRepository.create(dto);
        return this.safraRepository.save(safra);
    }
    async findAll() {
        return this.safraRepository.find({ relations: ['propriedade', 'culturas'] });
    }
    async findOne(id) {
        return this.safraRepository.findOne({ where: { id }, relations: ['propriedade', 'culturas'] });
    }
    async update(id, dto) {
        const safra = await this.findOne(id);
        if (!safra)
            throw new common_1.NotFoundException('Safra não encontrada');
        Object.assign(safra, dto);
        return this.safraRepository.save(safra);
    }
    async remove(id) {
        await this.safraRepository.delete(id);
    }
};
exports.SafrasService = SafrasService;
exports.SafrasService = SafrasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(safra_1.Safra)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SafrasService);
//# sourceMappingURL=safras.service.js.map