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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async createAdmin(donnees, req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.adminService.create(donnees);
    }
    async findallAdmin(req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        return await this.adminService.findall();
    }
    async findAdminById(donnees, req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.adminService.findone(donnees.id);
    }
    async findAdminByToken(req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        return await this.adminService.findone(+req.user.id);
    }
    async updateAdmin(donnees, req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.adminService.update(donnees, +req.user.id);
    }
    async updatePasswordAdmin(donnees, req) {
        if (req.user.fonction !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.adminService.updatePassword(donnees, +req.user.id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findallAdmin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAdminById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAdminByToken", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.UpdateAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Patch)('update-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.UpdatePasswordAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updatePasswordAdmin", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map