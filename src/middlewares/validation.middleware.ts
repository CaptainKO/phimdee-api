import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import ValidationException from '@exceptions/ValidationException';

function validationMiddleware<T>(type: any): RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(type, req.body))
      .then((errors: ValidationError[]) => {
        if (errors.length) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
          next(new ValidationException(message));
        } else {
          next();
        }
      });
  };
}

export default validationMiddleware;