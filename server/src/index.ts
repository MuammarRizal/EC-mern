import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  return res.send(`<h1>Hello World</h1>`);
});

app.listen(PORT, () => {
  console.log("Server berjalan di port : ", PORT);
});
