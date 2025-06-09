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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safra = void 0;
const typeorm_1 = require("typeorm");
const propriedade_1 = require("../../propriedades/propriedade/propriedade");
const cultura_plantada_1 = require("../../culturas/cultura-plantada/cultura-plantada");
let Safra = class Safra {
    id;
    ano;
    propriedade;
    culturas;
};
exports.Safra = Safra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Safra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Safra.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => propriedade_1.Propriedade, propriedade => propriedade.safras),
    __metadata("design:type", propriedade_1.Propriedade)
], Safra.prototype, "propriedade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cultura_plantada_1.CulturaPlantada, cultura => cultura.safra, { cascade: true }),
    __metadata("design:type", Array)
], Safra.prototype, "culturas", void 0);
exports.Safra = Safra = __decorate([
    (0, typeorm_1.Entity)()
], Safra);
//# sourceMappingURL=safra.js.map