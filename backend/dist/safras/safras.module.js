"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafrasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const safras_service_1 = require("./safras.service");
const safras_controller_1 = require("./safras.controller");
const safra_1 = require("./safra/safra");
let SafrasModule = class SafrasModule {
};
exports.SafrasModule = SafrasModule;
exports.SafrasModule = SafrasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([safra_1.Safra])],
        controllers: [safras_controller_1.SafrasController],
        providers: [safras_service_1.SafrasService],
    })
], SafrasModule);
//# sourceMappingURL=safras.module.js.map