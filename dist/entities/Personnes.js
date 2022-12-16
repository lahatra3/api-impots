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
exports.Personnes = void 0;
const typeorm_1 = require("typeorm");
const Paiements_1 = require("./Paiements");
const Notifications_1 = require("./Notifications");
let Personnes = class Personnes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Personnes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom", length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "prenoms", length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "prenoms", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date_naissance" }),
    __metadata("design:type", String)
], Personnes.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "lieu_naissance", length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "lieuNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "cin", length: 12 }),
    __metadata("design:type", String)
], Personnes.prototype, "cin", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date_cin" }),
    __metadata("design:type", String)
], Personnes.prototype, "dateCin", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "lieu_cin", length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "lieuCin", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "adresse", length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "tel1", length: 20 }),
    __metadata("design:type", String)
], Personnes.prototype, "tel1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "tel2", nullable: true, length: 20 }),
    __metadata("design:type", String)
], Personnes.prototype, "tel2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "password" }),
    __metadata("design:type", String)
], Personnes.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path_photo", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Personnes.prototype, "pathPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Personnes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Personnes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "fonction",
        length: 255,
        default: "users",
    }),
    __metadata("design:type", String)
], Personnes.prototype, "fonction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Paiements_1.Paiements, (paiements) => paiements.personne),
    __metadata("design:type", Array)
], Personnes.prototype, "paiements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notifications_1.Notifications, (notifications) => notifications.personne),
    __metadata("design:type", Array)
], Personnes.prototype, "notifications", void 0);
Personnes = __decorate([
    (0, typeorm_1.Entity)("personnes", { schema: "IMPOTS" })
], Personnes);
exports.Personnes = Personnes;
//# sourceMappingURL=Personnes.js.map