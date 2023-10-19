import { AutoMap } from '@automapper/classes';

export class UserResponse {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  lastname: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phone: string;

  @AutoMap()
  cpf: string;
}
