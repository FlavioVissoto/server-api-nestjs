import { Body, Controller, Post } from '@nestjs/common';

import { SignInUserDTO } from './dtos/user-signin.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async SignUp(@Body() params: SignInUserDTO) {
    return await this.userService.getAll();
  }
}
