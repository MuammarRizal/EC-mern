import AuthModel from "../models/AuthModel.model";
import { RegisterType } from "../types/Auth.types";

export const getAllUsersFromDB = async () => {
  return await AuthModel.find();
};

export const registerService = async (payload: RegisterType) => {
  return await AuthModel.create(payload);
};
