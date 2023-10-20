import { IsNotEmpty } from 'class-validator';

import { AutoMap } from '@automapper/classes';

export class TokenUserRequest {
  @AutoMap()
  @IsNotEmpty()
  token: string;
}
