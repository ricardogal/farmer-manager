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
exports.CulturasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cultura_plantada_1 = require("./cultura-plantada/cultura-plantada");
const safra_1 = require("../safras/safra/safra");
let CulturasService = class CulturasService {
    culturaRepository;
    safraRepository;
    constructor(culturaRepository, safraRepository) {
        this.culturaRepository = culturaRepository;
        this.safraRepository = safraRepository;
    }
    async create(dto) {
        const safra = await this.safraRepository.findOne({ where: { id: dto.safraId } });
        if (!safra)
            throw new common_1.NotFoundException('Safra não encontrada');
        const cultura = this.culturaRepository.create({ ...dto, safra });
        return this.culturaRepository.save(cultura);
    }
    async findAll() {
        return this.culturaRepository.find({ relations: ['safra'] });
    }
    async findOne(id) {
        return this.culturaRepository.findOne({ where: { id }, relations: ['safra'] });
    }
    async update(id, dto) {
        const cultura = await this.findOne(id);
        if (!cultura)
            throw new common_1.NotFoundException('Cultura não encontrada');
        if (dto.safraId) {
            const safra = await this.safraRepository.findOne({ where: { id: dto.safraId } });
            if (!safra)
                throw new common_1.NotFoundException('Safra não encontrada');
            cultura.safra = safra;
        }
        Object.assign(cultura, dto);
        return this.culturaRepository.save(cultura);
    }
    async remove(id) {
        await this.culturaRepository.delete(id);
    }
};
exports.CulturasService = CulturasService;
exports.CulturasService = CulturasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cultura_plantada_1.CulturaPlantada)),
    __param(1, (0, typeorm_1.InjectRepository)(safra_1.Safra)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CulturasService);
//# sourceMappingURL=culturas.service.js.map