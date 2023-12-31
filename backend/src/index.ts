import "dotenv/config";
import express from "express";
import { isValidPort } from "./utils";
import { startDB } from "./config/db";
import configRoutes from "./routes/app.routes";
import configMiddleware from "./middleware/global";

const startServer = async (port: number) => {
  const app = express();
  try {
    await startDB();

    configMiddleware(app);
    configRoutes(app);

    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(`🍎 Error occurred when starting server: ${error.message}`);
    } else {
      console.log("Unexpected error", error);
    }
  }
};

const envPort: string | undefined = process.env.PORT;
if (isValidPort(envPort)) {
  const parsedPort = parseInt(envPort as string, 10);
  startServer(parsedPort).catch((e) => {
    console.log(e.message), process.exit(1);
  });
}
