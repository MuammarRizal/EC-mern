import { Request, Response, Router } from "express";

const router: Router = Router();

// post /api/v1/auth/register
router.post("/register", (req: Request, res: Response) => {
  res.send("Hello register");
});

// post /api/v1/auth/login
router.post("/login", (req: Request, res: Response) => {
  res.send("Hello login");
});

// get /api/v1/auth/Logout
router.get("/logout", (req: Request, res: Response) => {
  res.send("Hello logout");
});

// get /api/v1/auth/getuser
router.get("/users", (req: Request, res: Response) => {
  res.send("Hello user");
});

export default router;
