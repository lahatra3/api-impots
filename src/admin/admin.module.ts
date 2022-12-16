import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrateurs } from 'src/entities/Administrateurs';

@Module({
  imports: [
    TypeOrmModule.forFeature([Administrateurs])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
