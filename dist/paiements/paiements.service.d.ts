import { Paiements } from 'src/entities/Paiements';
import { Repository } from 'typeorm';
import { CreatePaiementsDto, UpdatePaiementsStatusDto } from './dto/paiements.dto';
export declare class PaiementsService {
    private paiementsRepository;
    constructor(paiementsRepository: Repository<Paiements>);
    create(donnees: CreatePaiementsDto): Promise<void>;
    findall(): Promise<Paiements[]>;
    findById(personne_id: number): Promise<Paiements>;
    findByStatusId(status_id: number): Promise<Paiements[]>;
    updateStatus(donnees: UpdatePaiementsStatusDto): Promise<void>;
    delete(paiement_id: number): Promise<void>;
}
