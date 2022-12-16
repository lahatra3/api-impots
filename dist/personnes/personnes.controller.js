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
exports.PersonnesController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const personnes_dto_1 = require("./dto/personnes.dto");
const personnes_service_1 = require("./personnes.service");
let PersonnesController = class PersonnesController {
    constructor(personnesService) {
        this.personnesService = personnesService;
    }
    async createPersonne(donnees) {
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.create(donnees);
    }
    async findallPersonnes() {
        return await this.personnesService.findall();
    }
    async findPersonneById(donnees) {
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.findone(donnees.id);
    }
    async updatePersonne(donnees, req) {
        if (req.user.id !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.update(donnees);
    }
    async updatePasswordPersonne(donnees, req) {
        if (req.user.id !== 'admin')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.updatePassword(donnees);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personnes_dto_1.CreatePersonneDto]),
    __metadata("design:returntype", Promise)
], PersonnesController.prototype, "createPersonne", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonnesController.prototype, "findallPersonnes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonnesController.prototype, "findPersonneById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personnes_dto_1.UpdatePersonnesDto, Object]),
    __metadata("design:returntype", Promise)
], PersonnesController.prototype, "updatePersonne", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Patch)('update-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personnes_dto_1.UpdatePasswordPersonneDto, Object]),
    __metadata("design:returntype", Promise)
], PersonnesController.prototype, "updatePasswordPersonne", null);
PersonnesController = __decorate([
    (0, common_1.Controller)('personnes'),
    __metadata("design:paramtypes", [personnes_service_1.PersonnesService])
], PersonnesController);
exports.PersonnesController = PersonnesController;
//# sourceMappingURL=personnes.controller.js.map