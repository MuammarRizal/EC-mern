import { NextFunction, Request, Response } from "express";
import { getAllUsersFromDB, registerService } from "../services/Auth.service";
import Logger from "../utils/Logger";
import { AuthRegisterValidation } from "../validations/Auth.validation";
import { hashingPassword } from "../utils/HashingPassword";
import { v4 as uuidv4 } from "uuid";

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
  const { value, error } = AuthRegisterValidation(req.body);
  if (error) {
    Logger.error(error.details[0].message);
    return res.status(501).send({
      status: false,
      statusCode: 501,
      message: error.details[0].message,
      errorDetail: error.details,
    });
  }

  try {
    const passwordHash = await hashingPassword(req.body.password);
    const id = uuidv4();
    const payload = { id, ...value, password: passwordHash };
    await registerService(payload);
    Logger.info("Register Succesfully");
    return res
      .status(201)
      .send({ status: true, message: "User is created", payload });
  } catch (error) {
    Logger.warn(error);
    res.json({ error });
  }
};
