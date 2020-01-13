import { IS_PROD } from "../environment";

export abstract class HttpException extends Error {
  public readonly status!: number;
  public readonly name!: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class HTTP400Error extends HttpException {
  constructor(message: string = "bad request") {
    super(400, message);
  }
}

export class Http401Error extends HttpException {
  public readonly status = 401;

  constructor(message: string = "unauthorized") {
    super(401, message);
  }
}

export class HTTP403Error extends HttpException {
  public readonly status = 403;

  constructor(message: string = "access denied") {
    super(403, message);
  }
}

export class HTTP404Error extends HttpException {
  constructor(message: string = 'not found') {
    super(404, message);
  }
}

export class HTTP422Error extends HttpException {

  constructor(message: string = 'validation error') {
    super(422, message);
  }
}