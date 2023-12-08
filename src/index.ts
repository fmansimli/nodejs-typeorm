import http from "http";
import app from "./app";

import { AppDataSource } from "./data-source";
import { Logger } from "./services/log";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 6007;
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined");
}

async function bootstrap() {
  try {
    await AppDataSource.initialize();

    httpServer.listen(PORT, async () => {
      Logger.log("**** listening on port " + PORT);
    });
  } catch (error) {
    Logger.error(error);
  }
}

bootstrap();
