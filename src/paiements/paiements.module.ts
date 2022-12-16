import { Module } from '@nestjs/common';
import { PaiementsService } from './paiements.service';
import { PaiementsController } from './paiements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paiements } from 'src/entities/Paiements';
import { Personnes } from 'src/entities/Personnes';
import { Administrateurs } from 'src/entities/Administrateurs';
import { StatusPaiements } from 'src/entities/StatusPaiements';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paiements, Personnes, Administrateurs, StatusPaiements])
  ],
  providers: [PaiementsService],
  controllers: [PaiementsController]
})
export class PaiementsModule {}
