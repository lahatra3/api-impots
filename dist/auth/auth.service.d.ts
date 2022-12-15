import { JwtService } from '@nestjs/jwt';
import { Administrateurs } from 'src/entities/Administrateurs';
import { Personnes } from 'src/entities/Personnes';
import { Repository } from 'typeorm';
import { AuthDto, AuthResponseToken } from './dto/auth.dto';
export declare class AuthService {
    private personnesRepository;
    private adminRepository;
    private jwtService;
    constructor(personnesRepository: Repository<Personnes>, adminRepository: Repository<Administrateurs>, jwtService: JwtService);
    private sign;
    signinAdmin(donnees: AuthDto): Promise<AuthResponseToken>;
    signinPersonnes(donnees: AuthDto): Promise<AuthResponseToken>;
}
