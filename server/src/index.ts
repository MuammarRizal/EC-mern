import "./utils/ConnectDB";

import express from "express";
import Logger from "./utils/Logger";
import { routes } from "./routes/index.routes";
import { ErrorHandler, notFound } from "./middlewares/ErrorMiddleware";

const app = express();
const PORT: string | number = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for to access
routes(app);

// Error middlewares
app.use(notFound);
app.use(ErrorHandler);

app.listen(PORT, () => {
  Logger.info(`Server is running at port ${PORT}`);
});
