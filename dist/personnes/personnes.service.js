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
exports.PersonnesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Personnes_1 = require("../entities/Personnes");
const typeorm_2 = require("typeorm");
let PersonnesService = class PersonnesService {
    constructor(personnesRepository) {
        this.personnesRepository = personnesRepository;
    }
    async create(donnees) {
        await this.personnesRepository
            .createQueryBuilder()
            .insert()
            .into(Personnes_1.Personnes)
            .values({
            nom: donnees.nom,
            prenoms: donnees.prenoms,
            dateNaissance: donnees.date_naissance,
            cin: donnees.cin,
            dateCin: donnees.date_cin,
            lieuCin: donnees.lieu_cin,
            adresse: donnees.adresse,
            tel1: donnees.tel1,
            tel2: donnees.tel2,
            email: donnees.email,
            password: () => "SHA2('" + donnees.password + "', 256)"
        })
            .execute();
    }
    async findall() {
        return await this.personnesRepository
            .createQueryBuilder('p')
            .select([
            'p.id as id', 'p.nom as nom', 'p.prenoms as prenoms',
            'p.date_naissance as date_naissance', 'p.lieu_naissance as lieu_naissance',
            'p.cin as cin', 'p.date_cin as date_cin', 'p.lieu_cin as lieu_cin',
            'p.adresse as adresse', 'p.tel1 as tel1', 'p.tel2 as tel2',
            'p.email as email', 'p.path_photo as path_photo',
            'p.created_at as created_at', 'p.updated_at as updated_at'
        ])
            .getRawMany();
    }
    async findone(personne_id) {
        return await this.personnesRepository
            .createQueryBuilder('p')
            .select([
            'p.id as id', 'p.nom as nom', 'p.prenoms as prenoms',
            'p.date_naissance as date_naissance', 'p.lieu_naissance as lieu_naissance',
            'p.cin as cin', 'p.date_cin as date_cin', 'p.lieu_cin as lieu_cin',
            'p.adresse as adresse', 'p.tel1 as tel1', 'p.tel2 as tel2',
            'p.email as email', 'p.path_photo as path_photo',
            'p.created_at as created_at', 'p.updated_at as updated_at'
        ])
            .where(`p.id=:identifiant`, { identifiant: personne_id })
            .getRawOne();
    }
    async update(donnees, personne_id) {
        await this.personnesRepository
            .createQueryBuilder()
            .update(Personnes_1.Personnes)
            .set({
            adresse: donnees.adresse,
            tel1: donnees.tel1,
            tel2: donnees.tel2,
            email: donnees.email,
            updatedAt: () => "NOW()"
        })
            .where(`id=:identifiant`, { identifiant: personne_id })
            .execute();
    }
    async updatePassword(donnees, personne_id) {
        const verify = await this.personnesRepository
            .createQueryBuilder('p')
            .select(['True'])
            .where(`p.id=:identifiant AND p.password=SHA2(:password, 256)`, {
            identifiant: personne_id,
            password: donnees.last_password
        })
            .getRawOne();
        if (!verify)
            throw new common_1.ForbiddenException('Credentials incorrects');
        await this.personnesRepository
            .createQueryBuilder()
            .update(Personnes_1.Personnes)
            .set({
            password: () => "SHA2('" + donnees.new_password + "', 256)",
            updatedAt: () => "NOW()"
        })
            .where(`id=:identifiant`, { identifiant: personne_id })
            .execute();
    }
};
PersonnesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Personnes_1.Personnes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonnesService);
exports.PersonnesService = PersonnesService;
//# sourceMappingURL=personnes.service.js.map