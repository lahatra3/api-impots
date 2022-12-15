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
exports.StatusNotifications = void 0;
const typeorm_1 = require("typeorm");
const Notifications_1 = require("./Notifications");
let StatusNotifications = class StatusNotifications {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], StatusNotifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom_status", nullable: true, length: 100 }),
    __metadata("design:type", String)
], StatusNotifications.prototype, "nomStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notifications_1.Notifications, (notifications) => notifications.status),
    __metadata("design:type", Array)
], StatusNotifications.prototype, "notifications", void 0);
StatusNotifications = __decorate([
    (0, typeorm_1.Entity)("status_notifications", { schema: "IMPOTS" })
], StatusNotifications);
exports.StatusNotifications = StatusNotifications;
//# sourceMappingURL=StatusNotifications.js.map