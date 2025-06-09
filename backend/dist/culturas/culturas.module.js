"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CulturasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const culturas_service_1 = require("./culturas.service");
const culturas_controller_1 = require("./culturas.controller");
const cultura_plantada_1 = require("./cultura-plantada/cultura-plantada");
const safra_1 = require("../safras/safra/safra");
let CulturasModule = class CulturasModule {
};
exports.CulturasModule = CulturasModule;
exports.CulturasModule = CulturasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cultura_plantada_1.CulturaPlantada, safra_1.Safra])],
        controllers: [culturas_controller_1.CulturasController],
        providers: [culturas_service_1.CulturasService],
    })
], CulturasModule);
//# sourceMappingURL=culturas.module.js.map