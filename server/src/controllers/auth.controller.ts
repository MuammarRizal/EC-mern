import { NextFunction, Request, Response } from "express";
import { getAllUsersFromDB, registerService } from "../services/Auth.service";
import Logger from "../utils/Logger";

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getAllUsersFromDB();
  Logger.info("Get all users Succesfully");
  return res.json({ data: [...users] });
};

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await registerService(req.body);
    Logger.info("Register Succesfully");
    return res.send({ payload: req.body });
  } catch (error) {
    Logger.warn(error);
    res.json({ error });
  }
};
