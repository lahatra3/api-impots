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
exports.Habilitations = void 0;
const typeorm_1 = require("typeorm");
const Paiements_1 = require("./Paiements");
const Personnes_1 = require("./Personnes");
let Habilitations = class Habilitations {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Habilitations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom_habilitation", length: 255 }),
    __metadata("design:type", String)
], Habilitations.prototype, "nomHabilitation", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Habilitations.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path_piece_justificative", length: 255 }),
    __metadata("design:type", String)
], Habilitations.prototype, "pathPieceJustificative", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path_photo", length: 255 }),
    __metadata("design:type", String)
], Habilitations.prototype, "pathPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "personne_id" }),
    __metadata("design:type", Number)
], Habilitations.prototype, "personneId", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Habilitations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Habilitations.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Paiements_1.Paiements, (paiements) => paiements.habilitation),
    __metadata("design:type", Array)
], Habilitations.prototype, "paiements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Personnes_1.Personnes, (personnes) => personnes.habilitations, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "personne_id", referencedColumnName: "id" }]),
    __metadata("design:type", Personnes_1.Personnes)
], Habilitations.prototype, "personne", void 0);
Habilitations = __decorate([
    (0, typeorm_1.Index)("fk_personne_id_habilitations", ["personneId"], {}),
    (0, typeorm_1.Entity)("habilitations", { schema: "IMPOTS" })
], Habilitations);
exports.Habilitations = Habilitations;
//# sourceMappingURL=Habilitations.js.map