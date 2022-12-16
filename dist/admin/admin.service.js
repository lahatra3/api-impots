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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Administrateurs_1 = require("../entities/Administrateurs");
const typeorm_2 = require("typeorm");
let AdminService = class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async create(donnees) {
        await this.adminRepository
            .createQueryBuilder()
            .insert()
            .into(Administrateurs_1.Administrateurs)
            .values({
            nom: donnees.nom,
            prenoms: donnees.prenoms,
            tel: donnees.tel,
            email: donnees.email,
            password: () => "SHA2('" + donnees.password + "', 256)"
        })
            .execute();
    }
    async findall() {
        return await this.adminRepository
            .createQueryBuilder('a')
            .select([
            'a.id as id', 'a.nom as nom', 'a.prenoms as prenoms',
            'a.tel as tel', 'a.email as email', 'a.path_photo as photo',
            'a.created_at as created_at', 'a.updated_at as updated_at'
        ])
            .getRawMany();
    }
    async findone(personne_id) {
        return await this.adminRepository
            .createQueryBuilder('a')
            .select([
            'a.id as id', 'a.nom as nom', 'a.prenoms as prenoms',
            'a.tel as tel', 'a.email as email', 'a.path_photo as photo',
            'a.created_at as created_at', 'a.updated_at as updated_at'
        ])
            .where(`a.id=:identifiant`, { identifiant: personne_id })
            .getRawOne();
    }
    async update(donnees, personne_id) {
        await this.adminRepository
            .createQueryBuilder()
            .update(Administrateurs_1.Administrateurs)
            .set({
            tel: donnees.tel,
            email: donnees.email,
            updatedAt: () => "NOW()"
        })
            .where(`id=:identifiant`, { identifiant: personne_id })
            .execute();
    }
    async updatePassword(donnees, personne_id) {
        const verify = await this.adminRepository
            .createQueryBuilder('a')
            .select(['True'])
            .where(`a.id=:identifiant AND a.password=SHA2(:password, 256)`, {
            identifiant: personne_id,
            password: donnees.last_password
        })
            .getRawOne();
        if (!verify)
            throw new common_1.ForbiddenException('Credentials incorrects!');
        await this.adminRepository
            .createQueryBuilder()
            .update(Administrateurs_1.Administrateurs)
            .set({
            password: () => "SHA2('" + donnees.new_password + "', 256)",
            updatedAt: () => "NOW()"
        })
            .execute();
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Administrateurs_1.Administrateurs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map