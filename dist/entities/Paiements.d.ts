import { Personnes } from "./Personnes";
import { StatusPaiements } from "./StatusPaiements";
export declare class Paiements {
    id: number;
    titre: string;
    description: string;
    pathPieceJointe: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    statusId: number;
    personneId: number;
    datePaye: Date | null;
    adminIdTraitement: number | null;
    adminIdPaye: number | null;
    personne: Personnes;
    status: StatusPaiements;
}
