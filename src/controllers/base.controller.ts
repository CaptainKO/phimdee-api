import { Router } from "express";
import { IBaseController } from "src/interfaces/base.controller.d";




export class BaseController implements IBaseController {

  initialize(router: Router): void {
    throw new Error("Method not implemented.");
  }

}