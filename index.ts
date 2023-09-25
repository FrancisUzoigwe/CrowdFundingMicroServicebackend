import express from "express";
import { mainApp } from "./mainApp";
const app = express();
const port: number = 3200;
const realPort = port;

mainApp(app);
const Server = app.listen(realPort, () => {
  console.log("Server is live on port", realPort);
});

process.on("uncaughtException", (error) => {
  console.log("");
  console.log("Server is shutting down due to and uncaught exception", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to an unhandeled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
  
});
