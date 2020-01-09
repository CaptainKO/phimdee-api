import { UserRouter } from "./user";
import {Router} from "express";

export const APIRouter = Router();
APIRouter.use('/user', UserRouter);
