import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { ErrorFile, STATUS } from "./error/ErrorFile";
import { ErrorHandler, handleError } from "./error/ErrorHandler";

export const mainApp = (app: Application) => {
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(STATUS.OK).json({
        message: "You've successfully been granted permission to use this api",
      });
    } catch (error) {
      return res.status(STATUS.BAD).json({
        message:
          "You're unable to access this api due to some internal reasons, upgrade or pay for it to get it",
      });
    }
  });
  app.all(
    "/",
    (error: ErrorFile, req: Request, res: Response, next: NextFunction) => {
      next(
        new ErrorFile({
          errorMessage: `This error is as a result of route misplacement ${req.originalUrl}`,
          errorName: `Router error ${req.originalUrl}`,
          errorStatus: STATUS.BAD,
          errorSuccess: false,
        })
      );
    }
  );
  app.use(ErrorHandler);
};
