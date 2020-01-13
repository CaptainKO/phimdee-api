import HttpException from "./HttpException";

class NotFoundException extends HttpException {
  constructor(id?: string) {
    super(404, id ? `Post with id ${id} not found` : 'Not found');
  }
}

export default NotFoundException;