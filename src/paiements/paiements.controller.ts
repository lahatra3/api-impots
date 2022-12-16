import { Body, Controller, Get, NotAcceptableException, 
    Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePaiementsDto } from './dto/paiements.dto';
import { PaiementsService } from './paiements.service';

@Controller('paiements')
export class PaiementsController {
    constructor(
        private readonly paiementService: PaiementsService
    ) {}

    @UseGuards(AuthGuard('jwtImpots'))
    @Post('create')
    async createPaiement(@Body() donnees: CreatePaiementsDto, @Request() req: any) {
        if(req.user.id !== 'user') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.paiementService.create(donnees);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Get('all')
    async findallPaiements(@Request() req: any) {
        if(req.user.id !== 'admin') {

        }
        return await this.paiementService.findall();
    }
}
