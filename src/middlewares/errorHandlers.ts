import { Request, Response, NextFunction, Router } from "express";

import * as ErrorHandlers from "../util/ErrorHandlers";

type Handler = (router: Router) => void;

const handle404Error: Handler = (router) => {
  router.use(ErrorHandlers.notFoundError);
};

const handleClientErrors: Handler = (router) => {
  router.use(ErrorHandlers.clientError)
};

const handleServerErrors: Handler = (router) => {
  router.use(ErrorHandlers.serverError);
};

export const errorHandlers = [
  handle404Error,
  handleClientErrors,
  handleServerErrors,
];