import mongoose from "mongoose";
import CONFIG from "../config/environtment";
import Logger from "./Logger";

mongoose
  .connect(`${CONFIG.db}`)
  .then(() => {
    Logger.info("Connect TO DB");
  })
  .catch((error) => {
    Logger.error({ error: error.message }, "Connect To DB failed");
    process.exit(1);
  });
