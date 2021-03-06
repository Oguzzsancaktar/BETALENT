const dotenv = require("dotenv");
import helmet from "helmet";
const path = require("path");

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

import { AuthRoutes } from "./auth/auth.routes.config";
import express from "express";
import * as http from "http";

import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { CommonRoutesConfig } from "./common/common.routes.config";

import { UsersRoutes } from "./users/users.routes.config";
import { UserImageRoutes } from "./userImages/userImage.routes.config";
import { RegisterRoutes } from "./register/register.routes.config";

import debug from "debug";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

// Middlewares

// middleware to parse all incoming requests as JSON
app.use(express.json());
// middleware to allow cross-origin requests
app.use(cors());

app.use(helmet());

// Preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// Adding the routes to our array,
routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new UserImageRoutes(app));
routes.push(new RegisterRoutes(app));

const runningMessage = `Server running at http://localhost:${PORT}`;

app.get("/api", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, make terse
  if (typeof global.it === "function") {
    loggerOptions.level = "http"; // for non-debug test runs, squelch entirely
  }
}

app.use(express.static(path.join(__dirname, "build")));

app.get("/kayit", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(PORT, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  debugLog(runningMessage);
});

export default app as any;
