import * as express from "express";
import { Routes } from "./routes/crmRoutes";

import applyMiddleware from "./util/applyMiddleware";
import middleware from "./middleware";
import { errorHandlers } from "./middleware/errorHandlers";
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    this.app = express();
    this._config();
  }

  private _config() {

    applyMiddleware(middleware, this.app);
    this.routePrv.routes(this.app);
    applyMiddleware(errorHandlers, this.app);
  }
}
export default new App().app;
