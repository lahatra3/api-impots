export class CreateAdminDto {
    nom: string;
    prenoms: string;
    tel: string;
    email: string;
    password: string;
}

export class UpdateAdminDto {
    tel: string;
    email: string;
}


export class UpdatePasswordAdminDto {
    last_password: string;
    new_password: string;
}
