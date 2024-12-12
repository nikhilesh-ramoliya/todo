import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response, Request } from 'express';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception?.name === 'MongoError' ? 400 : 500;

    response.status(status).json({
      statusCode: status,
      message: exception?.message || 'Database error occurred',
      path: request.url,
    });
  }
}
