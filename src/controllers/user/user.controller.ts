import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest, SignInUserRequest } from '../../contracts/request/user';
import { ResponseData } from '../../contracts/response';
import { UserResponse } from '../../contracts/response/user';
import { AllowAnonymous } from '../../decorators';
import { JWTToken } from '../../interfaces';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll(): Promise<ResponseData<UserResponse[]>> {
    const result = await this.userService.getAll();
    return {
      data: result,
      count: result.length,
    };
  }

  @Post('create')
  async create(@Body() params: CreateUserRequest): Promise<ResponseData<UserResponse>> {
    const result = await this.userService.create(params);
    return {
      data: result,
    };
  }

  @Post('signin')
  @AllowAnonymous()
  async signIn(@Body() params: SignInUserRequest): Promise<ResponseData<JWTToken>> {
    const result = await this.userService.signIn(params);
    return {
      data: result,
    };
  }
}
