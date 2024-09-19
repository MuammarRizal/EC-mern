import { NextFunction, Request, Response } from "express";
import Logger from "../utils/Logger";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Page Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resStatusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message;

  if (err.name === "ValidationError") {
    console.log(err);
    console.log("validationErr");
    return;
  }

  Logger.error(`${err.message}`);
  res.status(resStatusCode).json({
    message,
    resStatusCode,
    stack: err.stack,
  });
};
