export class AuthDto {
    identifiant: string;
    password: string;
}

export class AuthResponse {
    id: number;
    fonction: string;
}

export class AuthResponseToken {
    access_token: string;
}
