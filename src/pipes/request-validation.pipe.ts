import { ArgumentMetadata, BadRequestException, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

interface ErrorRequest {
  property: string;
  message: string[];
}

@Injectable()
export class RequestValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const errorRequest: ErrorRequest[] = [] as ErrorRequest[];

      for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        const value = { property: element.property, message: [] } as ErrorRequest;
        for (const item of Object.keys(element.constraints)) {
          value.message.push(element.constraints[item]);
        }
        errorRequest.push(value);
      }
      throw new HttpException(errorRequest, HttpStatus.BAD_REQUEST);
      //throw new BadRequestException(errorRequest);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
