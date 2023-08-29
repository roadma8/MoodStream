import { Application } from "express";
import userRoutes from "./user.routes";
import moodRoutes from "./mood.routes";

export default (app: Application) => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1", moodRoutes);
};
