import { UserRouter } from "./user.api";
import {Router} from "express";

export const APIRouter = Router();
APIRouter.use('/user', UserRouter);
