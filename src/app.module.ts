import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.BD_HOST,
      port: +process.env.BD_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      // Just for development; I've .env.production and .env to fix the behavior 
      synchronize: true,

      extra: {
        trustServerCertificate: true,
      },
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
