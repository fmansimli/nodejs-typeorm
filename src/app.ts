import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { join } from "path";

import { AppConfig } from "./config/config";
import { catchError, catch404 } from "./middlewares/error";
import indexRouter from "./routes";

AppConfig.initialize();

const app = express();

app.use(express.json());
app.use(express.static(join(process.cwd(), "public")));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", indexRouter);

app.use(catch404);
app.use(catchError);

export default app;
