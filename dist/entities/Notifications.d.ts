import { Administrateurs } from "./Administrateurs";
import { Personnes } from "./Personnes";
import { StatusNotifications } from "./StatusNotifications";
export declare class Notifications {
    id: number;
    titre: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    personneId: number;
    adminId: number;
    statusId: number;
    admin: Administrateurs;
    personne: Personnes;
    status: StatusNotifications;
}
