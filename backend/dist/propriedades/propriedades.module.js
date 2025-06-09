"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropriedadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const propriedades_service_1 = require("./propriedades.service");
const propriedades_controller_1 = require("./propriedades.controller");
const propriedade_1 = require("./propriedade/propriedade");
const produtor_1 = require("../produtores/produtor/produtor");
let PropriedadesModule = class PropriedadesModule {
};
exports.PropriedadesModule = PropriedadesModule;
exports.PropriedadesModule = PropriedadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([propriedade_1.Propriedade, produtor_1.Produtor])],
        controllers: [propriedades_controller_1.PropriedadesController],
        providers: [propriedades_service_1.PropriedadesService],
    })
], PropriedadesModule);
//# sourceMappingURL=propriedades.module.js.map