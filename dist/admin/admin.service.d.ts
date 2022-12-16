import { Administrateurs } from 'src/entities/Administrateurs';
import { Repository } from 'typeorm';
import { CreateAdminDto, UpdateAdminDto, UpdatePasswordAdminDto } from './dto/admin.dto';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Administrateurs>);
    create(donnees: CreateAdminDto): Promise<void>;
    findall(): Promise<Administrateurs[]>;
    findone(personne_id: number): Promise<Administrateurs>;
    update(donnees: UpdateAdminDto, personne_id: number): Promise<void>;
    updatePassword(donnees: UpdatePasswordAdminDto, personne_id: number): Promise<void>;
}
