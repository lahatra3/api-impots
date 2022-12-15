"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnesModule = void 0;
const common_1 = require("@nestjs/common");
const personnes_service_1 = require("./personnes.service");
const personnes_controller_1 = require("./personnes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Personnes_1 = require("../entities/Personnes");
let PersonnesModule = class PersonnesModule {
};
PersonnesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Personnes_1.Personnes])
        ],
        providers: [personnes_service_1.PersonnesService],
        controllers: [personnes_controller_1.PersonnesController]
    })
], PersonnesModule);
exports.PersonnesModule = PersonnesModule;
//# sourceMappingURL=personnes.module.js.map