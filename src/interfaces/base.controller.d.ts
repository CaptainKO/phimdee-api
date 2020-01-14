import { Router } from "express";

export interface IBaseController {
  initialize(router: Router):void;
}