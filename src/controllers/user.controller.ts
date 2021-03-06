import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../database/entity/user.entity";
import { Http401Error } from "src/util/httpErrors";
import NotFoundException from "@exceptions/NotFoundException";
import { BaseController } from "./base.controller";
import { checkJwt } from "@middlewares/checkJwt";
import { checkRole } from "@middlewares/checkRole";
import userRepository from "src/repository/user.repository";

class UserController extends BaseController {

  public initialize(router: Router) {
    // console.log(this.listAll)
    router.get('users', [checkJwt, checkRole(["ADMIN"])], this.listAll)
    router.get('user/:id', this.getOneById)
  }

  async listAll(req: Request, res: Response) {
    //Get users from database
    const users = await userRepository.find({
      select: ["id", "username", "role"] //We don't want to send the passwords on response
    });

    //Send the users object
    res.send(users);
  };

  async getOneById(req: Request, res: Response) {
    //Get the ID from the url
    const { id } = req.params;

    //Get the user from database
    try {
      const user = await userRepository.findOneOrFail(id, {
        select: ["id", "username", "role"] //We don't want to send the password on response
      });
    } catch (error) {
      throw new NotFoundException("User Not Found");
    }
  };

  async newUser(req: Request, res: Response) {
    //Get parameters from the body
    let { username, password, role } = req.body;
    let user = new User();
    user.username = username;
    user.password = password;
    user.role = role;

    //Validate if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Hash the password, to securely store on DB

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }

    //If all ok, send 201 response
    res.status(201).send("User created");
  };

  async editUser(req: Request, res: Response) {
    //Get the ID from the url
    const id = req.params.id;

    //Get values from the body
    const { username, role } = req.body;

    //Try to find user on database
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("User not found");
      return;
    }

    //Validate the new values on model
    user.username = username;
    user.role = role;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  async deleteUse(req: Request, res: Response) {
    //Get the ID from the url
    const id = req.params.id;

    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      // res.status(404).send("User not found");
      throw new Http401Error("loi")
      return;
    }
    userRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };
};

export default UserController;