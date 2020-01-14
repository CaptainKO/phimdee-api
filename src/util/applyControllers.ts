import { Router } from "express";
import { BaseController } from "@controllers/base.controller";
import { IBaseController } from "src/interfaces/base.controller";

export default (
  controllers: IBaseController[],
  router: Router,
) => {
  for (const controller of controllers) {
    controller.initialize(router);
  }
};