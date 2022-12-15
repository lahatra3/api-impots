import { CreatePersonneDto, UpdatePasswordPersonneDto, UpdatePersonnesDto } from './dto/personnes.dto';
import { PersonnesService } from './personnes.service';
export declare class PersonnesController {
    private readonly personnesService;
    constructor(personnesService: PersonnesService);
    createPersonne(donnees: CreatePersonneDto): Promise<void>;
    findallPersonnes(): Promise<import("../entities/Personnes").Personnes[]>;
    findPersonneById(donnees: {
        id: number;
    }): Promise<import("../entities/Personnes").Personnes>;
    findPersonneByToken(req: any): Promise<import("../entities/Personnes").Personnes>;
    updatePersonne(donnees: UpdatePersonnesDto, req: any): Promise<void>;
    updatePasswordPersonne(donnees: UpdatePasswordPersonneDto, req: any): Promise<void>;
}
