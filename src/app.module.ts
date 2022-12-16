import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PersonnesModule } from './personnes/personnes.module';
import { AdminModule } from './admin/admin.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaiementsModule } from './paiements/paiements.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname+'/entities/*.js'],
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule,
    PersonnesModule,
    AdminModule,
    NotificationsModule,
    PaiementsModule
  ]
})
export class AppModule {}
