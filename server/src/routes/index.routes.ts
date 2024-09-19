import { Application, Router } from "express";
import AuthRouter from "./authRouter";

const _routes: Array<[string, Router]> = [["/api/v1/auth", AuthRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
