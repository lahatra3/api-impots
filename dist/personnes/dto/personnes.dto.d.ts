export declare class CreatePersonneDto {
    nom: string;
    prenoms: string;
    date_naissance: string;
    lieu_naissance: string;
    cin: string;
    date_cin: string;
    lieu_cin: string;
    adresse: string;
    tel1: string;
    tel2?: string | null;
    email: string;
    password: string;
}
export declare class UpdatePersonnesDto {
    personne_id: number;
    adresse: string;
    tel1: string;
    tel2?: string | null;
    email: string;
}
export declare class UpdatePasswordPersonneDto {
    personne_id: number;
    last_password: string;
    new_password: string;
}
