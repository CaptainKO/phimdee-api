import { APIRouter } from "./api";
import { Application } from "express";

export class Routes {
  public static routes(app: Application): void {
    app.use('/api/v1', APIRouter)
  }
}