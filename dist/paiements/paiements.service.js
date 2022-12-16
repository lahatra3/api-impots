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
exports.PaiementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Paiements_1 = require("../entities/Paiements");
const Personnes_1 = require("../entities/Personnes");
const StatusPaiements_1 = require("../entities/StatusPaiements");
const typeorm_2 = require("typeorm");
let PaiementsService = class PaiementsService {
    constructor(paiementsRepository) {
        this.paiementsRepository = paiementsRepository;
    }
    async create(donnees) {
        await this.paiementsRepository
            .createQueryBuilder()
            .insert()
            .into(Paiements_1.Paiements)
            .values({
            titre: donnees.titre,
            description: donnees.description,
            pathPieceJointe: donnees.piece_jointe,
            statusId: donnees.status_id,
            personneId: donnees.personne_id
        })
            .execute();
    }
    async findall() {
        return await this.paiementsRepository
            .createQueryBuilder('p')
            .select([
            'p.id as id', 'p.titre as titre', 'a.description as description',
            'a.path_piece_jointe as piece_jointe', 's.nom_status as status',
            'pe.id as personne_id', 'pe.nom as nom_personne',
            'pe.prenoms as prenoms_personne',
            'p.created_at as created_at', 'p.updated_at as updated_at',
            'p.date_paye as date_paye', 'p.admin_id_traitement as admin_id_traitement',
            'p.admin_id_paye as admin_id_paye'
        ])
            .innerJoin(Personnes_1.Personnes, 'pe', 'pe.id = p.personne_id')
            .innerJoin(StatusPaiements_1.StatusPaiements, 's', 's.id = p.status_id')
            .getRawMany();
    }
    async findById(personne_id) {
        return await this.paiementsRepository
            .createQueryBuilder('p')
            .select([
            'p.id as id', 'p.titre as titre', 'a.description as description',
            'a.path_piece_jointe as piece_jointe', 's.nom_status as status',
            'pe.id as personne_id', 'pe.nom as nom_personne',
            'pe.prenoms as prenoms_personne',
            'p.created_at as created_at', 'p.updated_at as updated_at',
            'p.date_paye as date_paye', 'p.admin_id_traitement as admin_id_traitement',
            'p.admin_id_paye as admin_id_paye'
        ])
            .innerJoin(Personnes_1.Personnes, 'pe', 'pe.id = p.personne_id')
            .innerJoin(StatusPaiements_1.StatusPaiements, 's', 's.id = p.status_id')
            .where(`p.id=:identifiant`, { identifiant: personne_id })
            .getRawOne();
    }
    async findByStatusId(status_id) {
        return await this.paiementsRepository
            .createQueryBuilder('p')
            .select([
            'p.id as id', 'p.titre as titre', 'a.description as description',
            'a.path_piece_jointe as piece_jointe', 's.nom_status as status',
            'pe.id as personne_id', 'pe.nom as nom_personne',
            'pe.prenoms as prenoms_personne',
            'p.created_at as created_at', 'p.updated_at as updated_at',
            'p.date_paye as date_paye', 'p.admin_id_traitement as admin_id_traitement',
            'p.admin_id_paye as admin_id_paye'
        ])
            .innerJoin(Personnes_1.Personnes, 'pe', 'pe.id = p.personne_id')
            .innerJoin(StatusPaiements_1.StatusPaiements, 's', 's.id = p.status_id')
            .where(`p.id=:identifiant`, { identifiant: status_id })
            .getRawMany();
    }
    async updateStatus(donnees) {
        await this.paiementsRepository
            .createQueryBuilder()
            .update(Paiements_1.Paiements)
            .set({
            statusId: donnees.status_id,
            datePaye: (donnees.status_id === (1 || 2)) ? null : () => "NOW()"
        })
            .where(`id=:identifiant`, { identifiant: donnees.paiement_id })
            .execute();
    }
    async delete(paiement_id) {
        await this.paiementsRepository.delete(paiement_id);
    }
};
PaiementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Paiements_1.Paiements)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaiementsService);
exports.PaiementsService = PaiementsService;
//# sourceMappingURL=paiements.service.js.map