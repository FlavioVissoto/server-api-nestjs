import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

import { AutoMap } from '@automapper/classes';

export class CreateUserRequest {
  @AutoMap()
  @IsString()
  name: string;

  @AutoMap()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsNumber()
  cpf: number;

  @AutoMap()
  @IsString()
  phone: string;

  @AutoMap()
  @IsString()
  @Length(6, 15)
  @IsNotEmpty()
  pass: string;

  @AutoMap()
  typeUser?: number;
}
