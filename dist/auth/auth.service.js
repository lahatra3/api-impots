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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const Administrateurs_1 = require("../entities/Administrateurs");
const Personnes_1 = require("../entities/Personnes");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(personnesRepository, adminRepository, jwtService) {
        this.personnesRepository = personnesRepository;
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
    }
    async sign(donnees) {
        return await this.jwtService.signAsync({
            id: donnees.id,
            fonction: donnees.fonction
        });
    }
    async signinAdmin(donnees) {
        const response = await this.adminRepository
            .createQueryBuilder('a')
            .select([
            'a.id ad id', 'a.fonction as fonction'
        ])
            .where(`(a.tel=:identifiant OR a.email=:identifiant) AND a.password=SHA2(:password, 256)`, {
            identifiant: donnees.identifiant,
            password: donnees.password
        })
            .getRawOne();
        if (!response)
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        return {
            access_token: await this.sign(response)
        };
    }
    async signinPersonnes(donnees) {
        const response = await this.personnesRepository
            .createQueryBuilder('p')
            .select([
            'p.id ad id', 'p.fonction as fonction'
        ])
            .where(`(p.tel1=:identifiant OR p.tel2=:identifiant OR p.email=:identifiant) AND p.password=SHA2(:password, 256)`, {
            identifiant: donnees.identifiant,
            password: donnees.password
        })
            .getRawOne();
        if (!response)
            throw new common_1.UnauthorizedException('Credentials incorrects!');
        return {
            access_token: await this.sign(response)
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Personnes_1.Personnes)),
    __param(1, (0, typeorm_1.InjectRepository)(Administrateurs_1.Administrateurs)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map