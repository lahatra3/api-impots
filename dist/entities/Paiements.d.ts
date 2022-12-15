import { Habilitations } from "./Habilitations";
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
    habilitationId: number;
    datePaye: Date | null;
    adminIdTraitement: number | null;
    adminIdPaye: number | null;
    habilitation: Habilitations;
    personne: Personnes;
    status: StatusPaiements;
}
