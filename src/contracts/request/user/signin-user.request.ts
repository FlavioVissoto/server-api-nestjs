import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

import { AutoMap } from '@automapper/classes';

export class SignInUserRequest {
  @AutoMap()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsString()
  @Length(6, 15)
  @IsNotEmpty()
  pass: string;
}
