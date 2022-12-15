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
exports.Notifications = void 0;
const typeorm_1 = require("typeorm");
const Administrateurs_1 = require("./Administrateurs");
const Personnes_1 = require("./Personnes");
const StatusNotifications_1 = require("./StatusNotifications");
let Notifications = class Notifications {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "titre", length: 255 }),
    __metadata("design:type", String)
], Notifications.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description" }),
    __metadata("design:type", String)
], Notifications.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Notifications.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Notifications.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "personne_id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "personneId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "admin_id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "adminId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "status_id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Administrateurs_1.Administrateurs, (administrateurs) => administrateurs.notifications, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }),
    (0, typeorm_1.JoinColumn)([{ name: "admin_id", referencedColumnName: "id" }]),
    __metadata("design:type", Administrateurs_1.Administrateurs)
], Notifications.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Personnes_1.Personnes, (personnes) => personnes.notifications, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "personne_id", referencedColumnName: "id" }]),
    __metadata("design:type", Personnes_1.Personnes)
], Notifications.prototype, "personne", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StatusNotifications_1.StatusNotifications, (statusNotifications) => statusNotifications.notifications, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }),
    (0, typeorm_1.JoinColumn)([{ name: "status_id", referencedColumnName: "id" }]),
    __metadata("design:type", StatusNotifications_1.StatusNotifications)
], Notifications.prototype, "status", void 0);
Notifications = __decorate([
    (0, typeorm_1.Index)("fk_personne_id_notifications", ["personneId"], {}),
    (0, typeorm_1.Index)("fk_admin_id_notifications", ["adminId"], {}),
    (0, typeorm_1.Index)("fk_status_id_notifications", ["statusId"], {}),
    (0, typeorm_1.Entity)("notifications", { schema: "IMPOTS" })
], Notifications);
exports.Notifications = Notifications;
//# sourceMappingURL=Notifications.js.map