import * as jwt from 'jsonwebtoken';

import { ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { HTTP_PTBR, JWT } from '../constants';
import { JWTData, JWTToken } from '../interfaces';

export class JWTService {
  constructor() {
    if (!process.env.JWT_SECRET) {
      throw new InternalServerErrorException(null, JWT.JWT_SECRET_NOT_FOUND);
    }

    if (!process.env.JWT_EXPIRES_TIME) {
      throw new InternalServerErrorException(null, JWT.JWT_EXPIRES_TIME_FOUND);
    }
  }

  public sign(data: JWTData): JWTToken {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: Number(process.env.JWT_EXPIRES_TIME),
    });

    return {
      access_token: token,
      expires_in: Number(process.env.JWT_EXPIRES_TIME),
      refresh_token: undefined,
      scope: undefined,
      token_type: 'Bearer',
    } as JWTToken;
  }

  public verify(token: string): JWTData {
    try {
      const decoded: jwt.JwtPayload | string = jwt.verify(token, process.env.JWT_SECRET);
      return decoded as JWTData;
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        throw new ForbiddenException(HTTP_PTBR.TOKEN_EXPIRED);
      }
      if (err instanceof jwt.JsonWebTokenError) {
        throw new ForbiddenException(null, HTTP_PTBR.TOKEN_INVALID_FORMAT);
      }
      throw new ForbiddenException(JWT.JWT_INVALID_TOKEN);
    }
  }
}
