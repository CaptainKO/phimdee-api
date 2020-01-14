import UserController from "./user.controller";
import AuthController from "./auth.controller";

const CONTROLLERS = [
  new UserController(),
  new AuthController(),
]

export default CONTROLLERS;