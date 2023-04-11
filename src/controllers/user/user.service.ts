import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../database/entities';
import { CryptoService, LogService } from '../../services';

@Injectable()
export class UserService {
  constructor(
    private logService: LogService,
    private cryptoService: CryptoService,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async getAll(): Promise<UserEntity[] | Error> {
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

  async getByEmail(email: string): Promise<UserEntity | Error> {
    try {
      const result = this.userRepository.findOne({
        where: {
          email: email,
        },
      });
      if (result) {
        return result;
      }
      return new Error(`Registro não encontrado para o e-mail: ${email}`);
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
      return new Error('Erro ao consultar registro.');
    }
  }
}
