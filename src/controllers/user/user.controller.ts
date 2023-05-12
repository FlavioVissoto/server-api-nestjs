import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { HTTP_PTBR } from '../../constants';
import { CreateUserRequest, SignInUserRequest } from '../../contracts/request/user';
import { ErrorService, StatusCodes } from '../../services/error.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll(@Res() res: Response) {
    try {
      const result = await this.userService.getAll();

      if (result instanceof Error) {
        const err = new ErrorService(StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(err.response.statusCode).json(err.response);
      }

      return res.status(StatusCodes.OK.status).json({ data: result });
    } catch (error: unknown) {
      const err = new ErrorService(StatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
      return res.status(err.response.statusCode).json(err.response);
    }
  }

  @Post('create')
  async create(@Body() params: CreateUserRequest, @Res() res: Response) {
    try {
      const result = await this.userService.create(params);
      if (result instanceof BadRequestException) {
        const error = new ErrorService(StatusCodes.BAD_REQUEST, result.message);
        return res.status(error.response.statusCode).json(error.response);
      }
      return res.status(StatusCodes.CREATED.status).json(result);
    } catch (error: unknown) {
      const err = new ErrorService(StatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
      return res.status(err.response.statusCode).json(err.response);
    }
  }

  @Post('signin')
  async signIn(@Body() params: SignInUserRequest, @Res() res: Response) {
    try {
      const result = await this.userService.signIn(params);
      return res.status(HttpStatus.OK).json(result);
    } catch (error: unknown) {
      if (error instanceof UnauthorizedException) {
        throw new HttpException(HTTP_PTBR.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
      }

      throw new HttpException(HTTP_PTBR.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
