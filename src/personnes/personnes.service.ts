import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnes } from 'src/entities/Personnes';
import { Repository } from 'typeorm';
import { CreatePersonneDto, UpdatePasswordPersonneDto, 
    UpdatePersonnesDto } from './dto/personnes.dto';

@Injectable()
export class PersonnesService {
    constructor(
        @InjectRepository(Personnes)
        private personnesRepository: Repository<Personnes>
    ) {}

    async create(donnees: CreatePersonneDto): Promise<void> {
        await this.personnesRepository
        .createQueryBuilder()
        .insert()
        .into(Personnes)
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
            password: () => "SHA2('"+donnees.password+"', 256)"
        })
        .execute();
    }

    async findall(): Promise<Personnes[]> {
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

    async findone(personne_id: number): Promise<Personnes> {
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
        .where(`p.id=:identifiant`,  {identifiant: personne_id})
        .getRawOne();
    }

    async update(donnees: UpdatePersonnesDto, personne_id: number): Promise<void> {
        await this.personnesRepository
        .createQueryBuilder()
        .update(Personnes)
        .set({
            adresse: donnees.adresse,
            tel1: donnees.tel1,
            tel2: donnees.tel2,
            email: donnees.email,
            updatedAt: () => "NOW()"
        })
        .where(`id=:identifiant`, {identifiant: personne_id})
        .execute();
    }

    async updatePassword(donnees: UpdatePasswordPersonneDto, personne_id: number): Promise<void> {
        const verify: Personnes = await this.personnesRepository
        .createQueryBuilder('p')
        .select(['True'])
        .where(`p.id=:identifiant AND p.password=SHA2(:password, 256)`, {
            identifiant: personne_id,
            password: donnees.last_password
        })
        .getRawOne();
        if(!verify) throw new ForbiddenException('Credentials incorrects');
        await this.personnesRepository
        .createQueryBuilder()
        .update(Personnes)
        .set({
            password: () => "SHA2('"+donnees.new_password+"', 256)",
            updatedAt: () => "NOW()"
        })
        .where(`id=:identifiant`, {identifiant: personne_id})
        .execute();
    }
}
