import { AutoMap } from '@automapper/classes';

export class CreateUserRequest {
  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  cpf: number;

  @AutoMap()
  phone: string;

  @AutoMap()
  pass: string;

  @AutoMap()
  typeUser?: number;
}
