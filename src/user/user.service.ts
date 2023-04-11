import { Injectable } from '@nestjs/common';
import { CryptoService } from '../services';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(private cryptoService: CryptoService) {}

  private users: User[] = [];

  async createUser(user: CreateUserDTO): Promise<User> {
    return {
      ...user,
      id: 123456,
    };
  }
}
