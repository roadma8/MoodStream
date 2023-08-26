import "dotenv/config";
import express from "express";
import { isValidPort } from "./utils";

const startServer = async (port: number) => {
  const app = express();
  // DB
  // Middlewares
  // Routes

  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
};

const envPort: string | undefined = process.env.PORT;
if (isValidPort(envPort)) {
  const parsedPort = parseInt(envPort as string, 10);
  startServer(parsedPort);
}
