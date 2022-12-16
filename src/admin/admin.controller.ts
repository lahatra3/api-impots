import { Body, Controller, Get, NotAcceptableException, Param, Patch, Post, Put, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto, UpdatePasswordAdminDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService: AdminService
    ) {}

    @UseGuards(AuthGuard('jwtImpots'))
    @Post('create')
    async createAdmin(@Body() donnees: CreateAdminDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.adminService.create(donnees);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Get('all')
    async findallAdmin(@Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        return await this.adminService.findall();
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Get(':id')
    async findAdminById(@Param() donnees: {id: number}, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.adminService.findone(donnees.id);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Get('')
    async findAdminByToken(@Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        return await this.adminService.findone(+req.user.id);
    }
    
    @UseGuards(AuthGuard('jwtImpots'))
    @Put('update')
    async updateAdmin(@Body() donnees: UpdateAdminDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.adminService.update(donnees, +req.user.id);
    }

    @UseGuards(AuthGuard('jwtImpots'))
    @Patch('update-password')
    async updatePasswordAdmin(@Body() donnees: UpdatePasswordAdminDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new UnauthorizedException('Credentials incorrects!');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects!');
        return await this.adminService.updatePassword(donnees, +req.user.id);
    }
}
