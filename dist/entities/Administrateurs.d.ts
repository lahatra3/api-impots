import { Notifications } from "./Notifications";
export declare class Administrateurs {
    id: number;
    nom: string;
    prenoms: string;
    tel: string;
    email: string;
    password: string;
    pathPhoto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    fonction: string;
    notifications: Notifications[];
}
