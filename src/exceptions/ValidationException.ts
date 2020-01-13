import HttpException from "./HttpException";

class ValidationException extends HttpException {
  constructor(message: string = "validation error") {
    super(422, message);
  }
}

export default ValidationException;