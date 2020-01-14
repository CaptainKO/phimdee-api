import { Application } from "express";
import { Router } from "express";
import CONTROLLERS from "@controllers";
import applyControllers from "src/util/applyControllers";

export const APIRouter = Router();
applyControllers(CONTROLLERS, APIRouter);
export class Routes {
  APIRouter = Router();
  constructor() {
    applyControllers(CONTROLLERS, this.APIRouter);
  }
  public routes(app: Application): void {
    app.use('/api/v1', this.APIRouter)
  }
}