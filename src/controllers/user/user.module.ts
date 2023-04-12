import { CryptoService, ErrorService, LogService } from '../../services';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../database/entities';
import { UserRepository } from '../../database/repository';
import { UserProfile } from '../../services/mapper';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [LogService, ErrorService, UserRepository, UserService, CryptoService, UserProfile],
  controllers: [UserController],
})
export class UserModule {}
