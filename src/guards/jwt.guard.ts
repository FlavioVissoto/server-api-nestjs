import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { HTTP_PTBR } from '../constants';
import { ALLOW_ANONYMOUS_META_KEY } from '../decorators';
import { JWTService } from '../services';

interface HeaderRequest {
  headers: Header;
}

interface Header {
  host: string;
  accept: string;
  'user-agent': string;
  'content-type': string;
  authorization: string;
}

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JWTService) {}

  canActivate(context: ExecutionContext): boolean {
    const isAnonymousAllowed = this.reflector.getAllAndOverride<boolean>(ALLOW_ANONYMOUS_META_KEY, [context.getHandler(), context.getClass()]);
    if (isAnonymousAllowed) {
      return true;
    }

    const { authorization } = context.switchToHttp().getRequest<HeaderRequest>().headers;

    if (!authorization) {
      throw new ForbiddenException(HTTP_PTBR.TOKEN_NOTFOUND);
    }

    try {
      const token = authorization.split(' ');
      if (token.length != 2 || token[0] !== 'Bearer') {
        throw new ForbiddenException(HTTP_PTBR.TOKEN_INVALID_FORMAT);
      }
      this.jwtService.verify(token[1]);
      return true;
    } catch (error: unknown) {
      // TODO: Gravar os logs de erros nesse catch
      throw error;
    }
  }
}
