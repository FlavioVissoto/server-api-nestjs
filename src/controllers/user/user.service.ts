import { CryptoService, JWTService, LogService } from '../../services';

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { HTTP_PTBR } from '../../constants/http/http-response.constants.ptbr';
import { CreateUserRequest, SignInUserRequest } from '../../contracts/request/user';
import { UserResponse } from '../../contracts/response/user';
import { UserEntity } from '../../database/entities';
import { UserRepository } from '../../database/repository';
import { JWTData, JWTToken } from '../../interfaces';

@Injectable()
export class UserService {
  constructor(
    private readonly logService: LogService,
    private readonly cryptoService: CryptoService,
    private readonly userRepository: UserRepository,
    private jwtService: JWTService,
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
      const result = await this.userRepository.getByEmail(email);
      return result;
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
      const validateEmail = await this.userRepository.getByEmail(user.email);

      if (validateEmail instanceof Error || validateEmail != undefined) {
        return new BadRequestException(HTTP_PTBR.USER.CREATE_DUPLICATE_EMAIL);
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

  async signIn(params: SignInUserRequest): Promise<JWTToken> {
    const result = await this.userRepository.getByEmail(params.email);

    if (!result || !(await this.cryptoService.verify(params.pass, result.password))) {
      throw new UnauthorizedException();
    }

    return this.jwtService.sign({
      email: result.email,
      uid: result.id,
      typeUser: result.typeUser,
    } as JWTData);
  }
}
