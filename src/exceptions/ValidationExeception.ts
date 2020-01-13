import HttpException from "./HttpException";

class AccessDeniedException extends HttpException {
  constructor(message: string = "validation error") {
    super(422, message);
  }
}

export default AccessDeniedException;