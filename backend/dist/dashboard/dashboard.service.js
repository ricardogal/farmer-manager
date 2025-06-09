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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const propriedade_1 = require("../propriedades/propriedade/propriedade");
const cultura_plantada_1 = require("../culturas/cultura-plantada/cultura-plantada");
let DashboardService = class DashboardService {
    propriedadeRepository;
    culturaRepository;
    constructor(propriedadeRepository, culturaRepository) {
        this.propriedadeRepository = propriedadeRepository;
        this.culturaRepository = culturaRepository;
    }
    async totalFazendas() {
        const total = await this.propriedadeRepository.count();
        return { totalFazendas: total };
    }
    async totalHectares() {
        const { sum } = await this.propriedadeRepository
            .createQueryBuilder('propriedade')
            .select('SUM(propriedade.areaTotal)', 'sum')
            .getRawOne();
        return { totalHectares: Number(sum) };
    }
    async pizzaPorEstado() {
        const result = await this.propriedadeRepository
            .createQueryBuilder('propriedade')
            .select('propriedade.estado', 'estado')
            .addSelect('COUNT(*)', 'total')
            .groupBy('propriedade.estado')
            .getRawMany();
        return result;
    }
    async pizzaPorCultura() {
        const result = await this.culturaRepository
            .createQueryBuilder('cultura')
            .select('cultura.nome', 'cultura')
            .addSelect('COUNT(*)', 'total')
            .groupBy('cultura.nome')
            .getRawMany();
        return result;
    }
    async pizzaPorUsoSolo() {
        const result = await this.propriedadeRepository
            .createQueryBuilder('propriedade')
            .select('SUM(propriedade.areaAgricultavel)', 'areaAgricultavel')
            .addSelect('SUM(propriedade.areaVegetacao)', 'areaVegetacao')
            .getRawOne();
        return {
            areaAgricultavel: Number(result.areaAgricultavel),
            areaVegetacao: Number(result.areaVegetacao),
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(propriedade_1.Propriedade)),
    __param(1, (0, typeorm_1.InjectRepository)(cultura_plantada_1.CulturaPlantada)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map