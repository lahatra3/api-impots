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
exports.Administrateurs = void 0;
const typeorm_1 = require("typeorm");
const Notifications_1 = require("./Notifications");
let Administrateurs = class Administrateurs {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Administrateurs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom", length: 255 }),
    __metadata("design:type", String)
], Administrateurs.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "prenoms", length: 255 }),
    __metadata("design:type", String)
], Administrateurs.prototype, "prenoms", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "tel", length: 20 }),
    __metadata("design:type", String)
], Administrateurs.prototype, "tel", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", length: 255 }),
    __metadata("design:type", String)
], Administrateurs.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "password" }),
    __metadata("design:type", String)
], Administrateurs.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "path_photo", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Administrateurs.prototype, "pathPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Administrateurs.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Administrateurs.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "fonction",
        length: 255,
        default: "admin",
    }),
    __metadata("design:type", String)
], Administrateurs.prototype, "fonction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notifications_1.Notifications, (notifications) => notifications.admin),
    __metadata("design:type", Array)
], Administrateurs.prototype, "notifications", void 0);
Administrateurs = __decorate([
    (0, typeorm_1.Entity)("administrateurs", { schema: "IMPOTS" })
], Administrateurs);
exports.Administrateurs = Administrateurs;
//# sourceMappingURL=Administrateurs.js.map