import { Router } from "express";
import UserController from "@controllers/user.controller";
import { checkJwt } from "@middlewares/checkJwt";
import { checkRole } from "@middlewares/checkRole";
import validationMiddleware from "@middlewares/validation.middleware";

export const UserRouter = Router();

//Get all users
UserRouter.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

// Get one user
UserRouter.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.getOneById
);

//Create a new user
UserRouter.post("/", 
[checkJwt, checkRole(["ADMIN"])], 
// validationMiddleware(CreatePostDto),
UserController.newUser);

//Edit one user
UserRouter.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editUser
);

//Delete one user
UserRouter.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deleteUser
);
