import * as jwt from 'jsonwebtoken';

import { JWTData, JWTToken } from '../interfaces';

import { InternalServerErrorException } from '@nestjs/common';
import { JWT } from '../constants';
import { LogService } from './log.service';

export class JWTService {
  constructor(private logService: LogService) {}

  public sign(data: JWTData): JWTToken {
    if (!process.env.JWT_SECRET) {
      this.logService.writeError({
        file: __dirname,
        message: JWT.JWT_SECRET_NOT_FOUND,
        method: 'sign',
        name: 'JWT_SERVICE',
      });
      throw new InternalServerErrorException(null, JWT.JWT_SECRET_NOT_FOUND);
    }

    if (!process.env.JWT_EXPIRES_TIME) {
      this.logService.writeError({
        file: __dirname,
        message: JWT.JWT_EXPIRES_TIME_FOUND,
        method: 'sign',
        name: 'JWT_SERVICE',
      });
      throw new InternalServerErrorException(null, JWT.JWT_EXPIRES_TIME_FOUND);
    }

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

  public verify(token: string): JWTData | 'JWT_SECRET_NOT_FOUND' | 'JWT_INVALID_TOKEN' {
    if (!process.env.JWT_SECRET) {
      this.logService.writeError({
        file: __dirname,
        message: JWT.JWT_SECRET_NOT_FOUND,
        method: 'verify',
        name: 'JWT_SERVICE',
      });
      return JWT.JWT_SECRET_NOT_FOUND;
    }

    try {
      const decoded: jwt.JwtPayload | string = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded === 'string') {
        return JWT.JWT_INVALID_TOKEN;
      }
      return decoded as JWTData;
    } catch (err) {
      this.logService.writeError({
        file: __dirname,
        message: JWT.JWT_INVALID_TOKEN,
        method: 'verify',
        name: 'JWT_SERVICE',
      });
      return JWT.JWT_INVALID_TOKEN;
    }
  }
}
