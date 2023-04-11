import { compare, genSalt, hash } from 'bcrypt';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  private SALT_RANDOM = 8;

  public async hash(value: string): Promise<string> {
    const saltGerenated = await genSalt(this.SALT_RANDOM);
    const hashPass = hash(value, saltGerenated);
    return hashPass;
  }

  public verify(value: string, hashed: string): Promise<boolean> {
    return compare(value, hashed);
  }
}
