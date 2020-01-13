import { Response, NextFunction } from "express";
import { HttpException, HTTP404Error } from "./httpErrors";
import { IS_PROD } from "../environment";
// import { Error } from "mongoose";

export const notFoundError = () => {
  throw new HTTP404Error('Method not found.');
};

export const clientError = (err: any, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    console.warn(err);
    res.status(err.status).sendMessage(err.message);
  } else {
    next(err);
  }
};

const serverErrorInProd = (err: any, res: Response, next: NextFunction) => {
  res.status(500).sendMessage("Internal Server Error");
}
const serverErrorInDev = (err: any, res: Response, next: NextFunction) => {
  res.status(500).send(err.stack);
};
export const serverError = IS_PROD ? serverErrorInProd : serverErrorInDev;