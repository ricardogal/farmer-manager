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
exports.ProdutoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produtor_1 = require("./produtor/produtor");
let ProdutoresService = class ProdutoresService {
    produtorRepository;
    constructor(produtorRepository) {
        this.produtorRepository = produtorRepository;
    }
    async create(dto) {
        const produtor = await this.produtorRepository.findOne({ where: { cpfCnpj: dto.cpfCnpj } });
        if (produtor)
            throw new common_1.ConflictException('Produtor já existe');
        const newProdutor = this.produtorRepository.create(dto);
        return this.produtorRepository.save(newProdutor);
    }
    async findAll() {
        return this.produtorRepository.find({ relations: ['propriedades'] });
    }
    async findOne(id) {
        return this.produtorRepository.findOne({ where: { id }, relations: ['propriedades'] });
    }
    async update(id, dto) {
        const produtor = await this.findOne(id);
        if (!produtor)
            throw new common_1.NotFoundException('Produtor não encontrado');
        Object.assign(produtor, dto);
        return this.produtorRepository.save(produtor);
    }
    async remove(id) {
        await this.produtorRepository.delete(id);
    }
};
exports.ProdutoresService = ProdutoresService;
exports.ProdutoresService = ProdutoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produtor_1.Produtor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoresService);
//# sourceMappingURL=produtores.service.js.map