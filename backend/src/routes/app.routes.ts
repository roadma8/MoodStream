import { Application } from "express";
import userRoutes from "./user.routes";

export default (app: Application) => {
  app.use("/api/v1/user", userRoutes);
};
