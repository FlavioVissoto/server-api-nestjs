import { CryptoService, LogService } from '../../services';

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { HTTP } from '../../constants/http-response.constants';
import { CreateUserRequest } from '../../contracts/request/user';
import { UserResponse } from '../../contracts/response/user';
import { UserEntity } from '../../database/entities';
import { UserRepository } from '../../database/repository';

@Injectable()
export class UserService {
  constructor(
    private readonly logService: LogService,
    private readonly cryptoService: CryptoService,
    private readonly userRepository: UserRepository,
    @InjectMapper() private readonly mapper: Mapper
  ) {}

  async getAll(): Promise<UserResponse[] | Error> {
    try {
      const result = await this.userRepository.GetAll();
      if (result instanceof Error) {
        throw new Error('Erro ao consultar usuários.');
      }
      return this.mapper.mapArray(result, UserEntity, UserResponse);
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.logService.writeError({
          method: 'getAll',
          file: __dirname,
          message: err.message,
          name: err.name,
          stack: err.stack,
        });

        console.log(err);
      }
      throw new Error('Erro ao consultar registro.');
    }
  }

  async getByEmail(email: string): Promise<UserResponse | Error> {
    try {
      const result = this.userRepository.getByEmail(email);
      if (result) {
        return result;
      }
      throw new Error(`Registro não encontrado para o e-mail: ${email}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.logService.writeError({
          method: 'getByEmail',
          file: __dirname,
          message: err.message,
          name: err.name,
          stack: err.stack,
        });
      }
      throw new Error('Erro ao consultar registro.');
    }
  }

  async create(user: CreateUserRequest): Promise<UserResponse | Error> {
    try {
      const validateEmail = this.userRepository.getByEmail(user.email);
      if (validateEmail instanceof Error || validateEmail != undefined) {
        return new BadRequestException(HTTP.USER.CREATE_DUPLICATE_EMAIL);
      }

      user.pass = await this.cryptoService.hash(user.pass);

      const entity = this.mapper.map(user, CreateUserRequest, UserEntity);
      entity.id = uuid();
      const result = await this.userRepository.create(entity);

      return this.mapper.map(result, UserEntity, UserResponse);
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.logService.writeError({
          method: 'create',
          file: __dirname,
          message: err.message,
          name: err.name,
          stack: err.stack,
        });
      }
      throw new Error('Erro ao criar usuário.');
    }
  }
}
