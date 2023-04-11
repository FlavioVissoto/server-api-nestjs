import { CryptoService, LogService } from '../../services';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../database/entities';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [LogService, UserService, CryptoService],
  controllers: [UserController],
})
export class UserModule {}
