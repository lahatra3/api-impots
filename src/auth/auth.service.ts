import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrateurs } from 'src/entities/Administrateurs';
import { Personnes } from 'src/entities/Personnes';
import { Repository } from 'typeorm';
import { AuthDto, AuthResponse, AuthResponseToken } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Personnes)
        private personnesRepository: Repository<Personnes>,

        @InjectRepository(Administrateurs)
        private adminRepository: Repository<Administrateurs>,
        private jwtService: JwtService
    ) {}

    private async sign(donnees: AuthResponse): Promise<string> {
        return await this.jwtService.signAsync({
            id: donnees.id,
            fonction: donnees.fonction
        });
    }

    async signinAdmin(donnees: AuthDto): Promise<AuthResponseToken> {
        const response: Administrateurs = await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id ad id', 'a.fonction as fonction'
        ])
        .where(`(a.tel=:identifiant OR a.email=:identifiant) AND a.password=SHA2(:password, 256)`, {
            identifiant: donnees.identifiant,
            password: donnees.password
        })
        .getRawOne();
        if(!response) throw new UnauthorizedException('Credentials incorrects!');
        return {
            access_token: await this.sign(response)
        };
    }

    async signinPersonnes(donnees: AuthDto): Promise<AuthResponseToken> {
        const response: Personnes = await this.personnesRepository
        .createQueryBuilder('p')
        .select([
            'p.id ad id', 'p.fonction as fonction'
        ])
        .where(`(p.tel1=:identifiant OR p.tel2=:identifiant OR p.email=:identifiant) AND p.password=SHA2(:password, 256)`, {
            identifiant: donnees.identifiant,
            password: donnees.password
        })
        .getRawOne();
        if(!response) throw new UnauthorizedException('Credentials incorrects!');
        return {
            access_token: await this.sign(response)
        };
    }
}
