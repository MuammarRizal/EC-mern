import { Request, Response, Router } from "express";
import {
  getUsersController,
  registerController,
} from "../controllers/auth.controller";

const AuthRouter: Router = Router();

// post /api/v1/auth/register
AuthRouter.post("/register", registerController);

// post /api/v1/auth/login
AuthRouter.post("/login", (req: Request, res: Response) => {
  res.send("Hello login");
});

// get /api/v1/auth/Logout
AuthRouter.get("/logout", (req: Request, res: Response) => {
  res.send("Hello logout");
});

// get /api/v1/auth/getuser
AuthRouter.get("/users", getUsersController);

export default AuthRouter;
