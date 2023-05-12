import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogService } from '../../../services';
import { UserEntity } from '../../entities';

@Injectable()
export class UserRepository {
  constructor(private logService: LogService, @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  public async GetAll(): Promise<UserEntity[] | Error> {
    try {
      return this.userRepository.find();
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
      return new Error('Erro ao consultar registro.');
    }
  }

  public async getByEmail(email: string): Promise<UserEntity> {
    try {
      const result = await this.userRepository.findOne({
        where: {
          email: email,
        },
      });
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

  public async create(user: UserEntity): Promise<UserEntity | Error> {
    try {
      return this.userRepository.save(user);
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
      return new Error('Erro ao salvar registro.');
    }
  }
}
