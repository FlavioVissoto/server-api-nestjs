import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const details = this.getDetails(exception);

    res.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: req.url,
      details: details,
    });
  }

  private getDetails(exception: HttpException) {
    const details = exception.getResponse();
    if (details instanceof Array) {
      return details;
    } else {
      return undefined;
    }
  }
}
