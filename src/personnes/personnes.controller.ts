import { Body, Controller, Get, NotAcceptableException, 
    Param, Patch, Post, Put, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePersonneDto, UpdatePasswordPersonneDto, UpdatePersonnesDto } from './dto/personnes.dto';
import { PersonnesService } from './personnes.service';

@Controller('personnes')
export class PersonnesController {
    constructor(
        private readonly personnesService: PersonnesService
    ) {}

    @Post('create')
    async createPersonne(@Body() donnees: CreatePersonneDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.create(donnees);
    }

    @Get('all')
    async findallPersonnes() {
        return await this.personnesService.findall();
    }

    @Get(':id')
    async findPersonneById(@Param() donnees: {id: number}) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.findone(donnees.id);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Put('update')
    async updatePersonne(@Body() donnees: UpdatePersonnesDto, @Request() req: any) {
        if(req.user.id !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.update(donnees);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Patch('update-password')
    async updatePasswordPersonne(@Body() donnees: UpdatePasswordPersonneDto, @Request() req: any) {
        if(req.user.id !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.personnesService.updatePassword(donnees);
    }
}
