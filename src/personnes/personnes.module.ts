import { Module } from '@nestjs/common';
import { PersonnesService } from './personnes.service';
import { PersonnesController } from './personnes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnes } from 'src/entities/Personnes';

@Module({
  imports: [
    TypeOrmModule.forFeature([Personnes])
  ],
  providers: [PersonnesService],
  controllers: [PersonnesController]
})
export class PersonnesModule {}
