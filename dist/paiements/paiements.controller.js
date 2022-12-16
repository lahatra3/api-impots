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
exports.PaiementsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const paiements_dto_1 = require("./dto/paiements.dto");
const paiements_service_1 = require("./paiements.service");
let PaiementsController = class PaiementsController {
    constructor(paiementService) {
        this.paiementService = paiementService;
    }
    async createPaiement(donnees, req) {
        if (req.user.id !== 'users')
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        if (!donnees)
            throw new common_1.NotAcceptableException('Credentials incorrects!');
        return await this.paiementService.create(donnees);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwtImpots')),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paiements_dto_1.CreatePaiementsDto, Object]),
    __metadata("design:returntype", Promise)
], PaiementsController.prototype, "createPaiement", null);
PaiementsController = __decorate([
    (0, common_1.Controller)('paiements'),
    __metadata("design:paramtypes", [paiements_service_1.PaiementsService])
], PaiementsController);
exports.PaiementsController = PaiementsController;
//# sourceMappingURL=paiements.controller.js.map