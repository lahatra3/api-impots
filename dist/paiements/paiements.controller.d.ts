import { CreatePaiementsDto } from './dto/paiements.dto';
import { PaiementsService } from './paiements.service';
export declare class PaiementsController {
    private readonly paiementService;
    constructor(paiementService: PaiementsService);
    createPaiement(donnees: CreatePaiementsDto, req: any): Promise<void>;
    findallPaiements(req: any): Promise<import("../entities/Paiements").Paiements[]>;
}
