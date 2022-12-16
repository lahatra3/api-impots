import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrateurs } from 'src/entities/Administrateurs';
import { Repository } from 'typeorm';
import { CreateAdminDto, UpdateAdminDto, UpdatePasswordAdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Administrateurs)
        private adminRepository: Repository<Administrateurs>
    ) {}

    async create(donnees: CreateAdminDto): Promise<void> {
        await this.adminRepository
        .createQueryBuilder()
        .insert()
        .into(Administrateurs)
        .values({
            nom: donnees.nom,
            prenoms: donnees.prenoms,
            tel: donnees.tel,
            email: donnees.email,
            password: () => "SHA2('"+donnees.password+"', 256)"
        })
        .execute();
    }

    async findall(): Promise<Administrateurs[]> {
        return await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id as id', 'a.nom as nom', 'a.prenoms as prenoms',
            'a.tel as tel', 'a.email as email', 'a.path_photo as photo',
            'a.created_at as created_at', 'a.updated_at as updated_at'
        ])
        .getRawMany();
    }

    async findone(personne_id: number): Promise<Administrateurs> {
        return await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id as id', 'a.nom as nom', 'a.prenoms as prenoms',
            'a.tel as tel', 'a.email as email', 'a.path_photo as photo',
            'a.created_at as created_at', 'a.updated_at as updated_at'
        ])
        .where(`a.id=:identifiant`, {identifiant: personne_id})
        .getRawOne();
    }

    async update(donnees: UpdateAdminDto, personne_id: number): Promise<void> {
        await this.adminRepository
        .createQueryBuilder()
        .update(Administrateurs)
        .set({
            tel: donnees.tel,
            email: donnees.email,
            updatedAt: () => "NOW()"
        })
        .where(`id=:identifiant`, { identifiant: personne_id})
        .execute();  
    }

    async updatePassword(donnees: UpdatePasswordAdminDto, personne_id: number): Promise<void> {
        const verify: Administrateurs = await this.adminRepository
        .createQueryBuilder('a')
        .select(['True'])
        .where(`a.id=:identifiant AND a.password=SHA2(:password, 256)`, {
            identifiant: personne_id,
            password: donnees.last_password
        })
        .getRawOne();
        if(!verify) throw new ForbiddenException('Credentials incorrects!');
        await this.adminRepository
        .createQueryBuilder()
        .update(Administrateurs)
        .set({
            password: () => "SHA2('"+donnees.new_password+"', 256)",
            updatedAt: () => "NOW()"
        })
        .execute();
    }
}
