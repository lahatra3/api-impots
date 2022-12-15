import { Paiements } from "./Paiements";
import { Personnes } from "./Personnes";
export declare class Habilitations {
    id: number;
    nomHabilitation: string;
    description: string | null;
    pathPieceJustificative: string;
    pathPhoto: string;
    personneId: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    paiements: Paiements[];
    personne: Personnes;
}
