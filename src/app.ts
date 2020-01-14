import * as express from "express";

import applyMiddleware from "./util/applyMiddlewares";
import middleware from "@middlewares";
import { Routes } from "./routes";
import { errorHandlers } from "@middlewares/errorHandlers";
import { createConnection, Connection } from "typeorm";

class App {
  public app: express.Application;
  public routePrv = new Routes();
  public dbConnection = Connection;
  constructor() {
    this.app = express();
    this._config();
  }

  private async _config() {
    await this._configDatabase();
    applyMiddleware(middleware, this.app);
    this.routePrv.routes(this.app);
    applyMiddleware(errorHandlers, this.app);
  }

  private _configDatabase() {
    return createConnection()
  }
}
export default new App().app;
