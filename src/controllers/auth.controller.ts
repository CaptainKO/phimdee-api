import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";

import { User } from "../entity/user.entity";
import { JWT_SECRET } from "../environment";
import UserRepository from "src/repository/user.repository";

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    let user: User;
    try {
      user = await UserRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.comparePassword(password)) {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(token);
  };

  static async changePassword (req: Request, res: Response){
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    let user: User;
    try {
      user = await UserRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if old password matches
    if (!user.comparePassword(oldPassword)) {
      res.status(401).send();
      return;
    }

    //Validate de model (password length)
    user.hashPassword(newPassword);
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    // user.hashPassword();
    UserRepository.save(user);

    res.status(204).send();
  };
}
export default AuthController;