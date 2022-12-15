import { Paiements } from "./Paiements";
import { Notifications } from "./Notifications";
import { Habilitations } from "./Habilitations";
export declare class Personnes {
    id: number;
    nom: string;
    prenoms: string;
    dateNaissance: string;
    lieuNaissance: string;
    cin: string;
    dateCin: string;
    lieuCin: string;
    adresse: string;
    tel1: string;
    tel2: string | null;
    email: string | null;
    password: string;
    pathPhoto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    fonction: string;
    paiements: Paiements[];
    notifications: Notifications[];
    habilitations: Habilitations[];
}
