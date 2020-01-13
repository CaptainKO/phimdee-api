import HttpException from "./HttpException";

class AccessDeniedException extends HttpException {
  constructor(message: string = "Access denied") {
    super(401,message);
  }
}

export default AccessDeniedException;