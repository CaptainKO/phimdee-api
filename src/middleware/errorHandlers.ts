import { Request, Response, NextFunction, Router } from "express";

import * as ErrorHandlers from "../util/ErrorHandlers";

type Handler = (router: Router) => void;

const handle404Error: Handler = (router) => {
  router.use((req, res) => {
    ErrorHandlers.notFoundError();
  });
};

const handleClientErrors: Handler = (router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandlers.clientError(err, res, next);
  });
};

const handleServerErrors: Handler = (router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandlers.serverError(err, res, next);
  });
};

export const errorHandlers = [
  handle404Error,
  handleClientErrors,
  handleServerErrors,
];