import { APP_FILTER, APP_GUARD } from '@nestjs/core';

import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { JWTGuard } from './guards';
import { CacheInMemoryAppModule } from './modules/cache/cache-memory-app.module';
import { JWTService } from './services';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE_DATABASE,
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
      entities: [`${__dirname}/**/*.entity{*.js,*.ts}`],
      migrations: [`${__dirname}/database/migrations/{*.js,*.ts}`],
      migrationsRun: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    CacheInMemoryAppModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JWTService,
    {
      provide: APP_GUARD,
      useClass: JWTGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
