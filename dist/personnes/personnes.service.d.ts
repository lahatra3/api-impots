import { Personnes } from 'src/entities/Personnes';
import { Repository } from 'typeorm';
import { CreatePersonneDto, UpdatePasswordPersonneDto, UpdatePersonnesDto } from './dto/personnes.dto';
export declare class PersonnesService {
    private personnesRepository;
    constructor(personnesRepository: Repository<Personnes>);
    create(donnees: CreatePersonneDto): Promise<void>;
    findall(): Promise<Personnes[]>;
    findone(personne_id: number): Promise<Personnes>;
    update(donnees: UpdatePersonnesDto): Promise<void>;
    updatePassword(donnees: UpdatePasswordPersonneDto): Promise<void>;
}
