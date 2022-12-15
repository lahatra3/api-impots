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
exports.StatusPaiements = void 0;
const typeorm_1 = require("typeorm");
const Paiements_1 = require("./Paiements");
let StatusPaiements = class StatusPaiements {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], StatusPaiements.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom_status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], StatusPaiements.prototype, "nomStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Paiements_1.Paiements, (paiements) => paiements.status),
    __metadata("design:type", Array)
], StatusPaiements.prototype, "paiements", void 0);
StatusPaiements = __decorate([
    (0, typeorm_1.Entity)("status_paiements", { schema: "IMPOTS" })
], StatusPaiements);
exports.StatusPaiements = StatusPaiements;
//# sourceMappingURL=StatusPaiements.js.map