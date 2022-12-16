export class CreatePaiementsDto {
    titre: string;
    description: string;
    piece_jointe: string;
    status_id: number;
    personne_id: number;
}

export class UpdatePaiementsStatusDto {
    paiement_id: number;
    status_id: number;
}