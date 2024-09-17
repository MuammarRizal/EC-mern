import express from "express";
import authRouter from "./routes/authRouter";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server berjalan di ", { PORT });
});
