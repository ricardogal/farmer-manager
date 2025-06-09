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
exports.PropriedadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const propriedade_1 = require("./propriedade/propriedade");
const produtor_1 = require("../produtores/produtor/produtor");
let PropriedadesService = class PropriedadesService {
    propriedadeRepository;
    produtorRepository;
    constructor(propriedadeRepository, produtorRepository) {
        this.propriedadeRepository = propriedadeRepository;
        this.produtorRepository = produtorRepository;
    }
    async create(dto) {
        const produtor = await this.produtorRepository.findOne({ where: { id: dto.produtorId } });
        if (!produtor)
            throw new common_1.NotFoundException('Produtor não encontrado');
        const propriedade = this.propriedadeRepository.create({ ...dto, produtor });
        return this.propriedadeRepository.save(propriedade);
    }
    async findAll() {
        return this.propriedadeRepository.find({ relations: ['produtor', 'safras'] });
    }
    async findOne(id) {
        return this.propriedadeRepository.findOne({ where: { id }, relations: ['produtor', 'safras'] });
    }
    async update(id, dto) {
        const propriedade = await this.findOne(id);
        if (!propriedade)
            throw new common_1.NotFoundException('Propriedade não encontrada');
        if (dto.produtorId) {
            const produtor = await this.produtorRepository.findOne({ where: { id: dto.produtorId } });
            if (!produtor)
                throw new common_1.NotFoundException('Produtor não encontrado');
            propriedade.produtor = produtor;
        }
        Object.assign(propriedade, dto);
        return this.propriedadeRepository.save(propriedade);
    }
    async remove(id) {
        await this.propriedadeRepository.delete(id);
    }
};
exports.PropriedadesService = PropriedadesService;
exports.PropriedadesService = PropriedadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(propriedade_1.Propriedade)),
    __param(1, (0, typeorm_1.InjectRepository)(produtor_1.Produtor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PropriedadesService);
//# sourceMappingURL=propriedades.service.js.map