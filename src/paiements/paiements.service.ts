import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paiements } from 'src/entities/Paiements';
import { Personnes } from 'src/entities/Personnes';
import { StatusPaiements } from 'src/entities/StatusPaiements';
import { Repository } from 'typeorm';
import { CreatePaiementsDto, UpdatePaiementsStatusDto } from './dto/paiements.dto';

@Injectable()
export class PaiementsService {
    constructor(
        @InjectRepository(Paiements)
        private paiementsRepository: Repository<Paiements>
    ) {}

    async create(donnees: CreatePaiementsDto): Promise<void> {
        await this.paiementsRepository
        .createQueryBuilder()
        .insert()
        .into(Paiements)
        .values({
            titre: donnees.titre,
            description: donnees.description,
            pathPieceJointe: donnees.piece_jointe,
            statusId: donnees.status_id,
            personneId: donnees.personne_id
        })
        .execute();
    }

    async findall(): Promise<Paiements[]> {
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
        .innerJoin(Personnes,'pe', 'pe.id = p.personne_id')
        .innerJoin(StatusPaiements, 's', 's.id = p.status_id')
        .getRawMany();
    }

    async findById(personne_id: number): Promise<Paiements> {
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
        .innerJoin(Personnes,'pe', 'pe.id = p.personne_id')
        .innerJoin(StatusPaiements, 's', 's.id = p.status_id')
        .where(`p.id=:identifiant`, {identifiant: personne_id})
        .getRawOne();
    }

    async findByStatusId(status_id: number): Promise<Paiements[]> {
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
        .innerJoin(Personnes,'pe', 'pe.id = p.personne_id')
        .innerJoin(StatusPaiements, 's', 's.id = p.status_id')
        .where(`p.id=:identifiant`, {identifiant: status_id})
        .getRawMany();
    }

    async updateStatus(donnees: UpdatePaiementsStatusDto): Promise<void> {
        await this.paiementsRepository
        .createQueryBuilder()
        .update(Paiements)
        .set({
            statusId: donnees.status_id,
            datePaye: (donnees.status_id === (1 || 2)) ? null : () => "NOW()" 
        })
        .where(`id=:identifiant`, {identifiant: donnees.paiement_id})
        .execute();
    }

    async delete(paiement_id: number): Promise<void> {
        await this.paiementsRepository.delete(paiement_id);
    }
}
