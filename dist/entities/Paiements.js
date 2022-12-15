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
exports.Paiements = void 0;
const typeorm_1 = require("typeorm");
const Habilitations_1 = require("./Habilitations");
const Personnes_1 = require("./Personnes");
const StatusPaiements_1 = require("./StatusPaiements");
let Paiements = class Paiements {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Paiements.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "titre", length: 255 }),
    __metadata("design:type", String)
], Paiements.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", length: 255 }),
    __metadata("design:type", String)
], Paiements.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path_piece_jointe", length: 255 }),
    __metadata("design:type", String)
], Paiements.prototype, "pathPieceJointe", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Paiements.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Paiements.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "status_id" }),
    __metadata("design:type", Number)
], Paiements.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "personne_id" }),
    __metadata("design:type", Number)
], Paiements.prototype, "personneId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "habilitation_id" }),
    __metadata("design:type", Number)
], Paiements.prototype, "habilitationId", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "date_paye", nullable: true }),
    __metadata("design:type", Date)
], Paiements.prototype, "datePaye", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "admin_id_traitement", nullable: true }),
    __metadata("design:type", Number)
], Paiements.prototype, "adminIdTraitement", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "admin_id_paye", nullable: true }),
    __metadata("design:type", Number)
], Paiements.prototype, "adminIdPaye", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Habilitations_1.Habilitations, (habilitations) => habilitations.paiements, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "habilitation_id", referencedColumnName: "id" }]),
    __metadata("design:type", Habilitations_1.Habilitations)
], Paiements.prototype, "habilitation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Personnes_1.Personnes, (personnes) => personnes.paiements, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "personne_id", referencedColumnName: "id" }]),
    __metadata("design:type", Personnes_1.Personnes)
], Paiements.prototype, "personne", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StatusPaiements_1.StatusPaiements, (statusPaiements) => statusPaiements.paiements, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }),
    (0, typeorm_1.JoinColumn)([{ name: "status_id", referencedColumnName: "id" }]),
    __metadata("design:type", StatusPaiements_1.StatusPaiements)
], Paiements.prototype, "status", void 0);
Paiements = __decorate([
    (0, typeorm_1.Index)("fk_status_id_paiements", ["statusId"], {}),
    (0, typeorm_1.Index)("fk_personne_id_paiements", ["personneId"], {}),
    (0, typeorm_1.Index)("fk_habilitation_id_paiements", ["habilitationId"], {}),
    (0, typeorm_1.Entity)("paiements", { schema: "IMPOTS" })
], Paiements);
exports.Paiements = Paiements;
//# sourceMappingURL=Paiements.js.map