"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaiementsModule = void 0;
const common_1 = require("@nestjs/common");
const paiements_service_1 = require("./paiements.service");
const paiements_controller_1 = require("./paiements.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Paiements_1 = require("../entities/Paiements");
const Personnes_1 = require("../entities/Personnes");
const Administrateurs_1 = require("../entities/Administrateurs");
const StatusPaiements_1 = require("../entities/StatusPaiements");
let PaiementsModule = class PaiementsModule {
};
PaiementsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Paiements_1.Paiements, Personnes_1.Personnes, Administrateurs_1.Administrateurs, StatusPaiements_1.StatusPaiements])
        ],
        providers: [paiements_service_1.PaiementsService],
        controllers: [paiements_controller_1.PaiementsController]
    })
], PaiementsModule);
exports.PaiementsModule = PaiementsModule;
//# sourceMappingURL=paiements.module.js.map