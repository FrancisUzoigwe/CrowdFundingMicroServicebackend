import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { STATUS } from "../error/ErrorFile";
const prisma = new PrismaClient();

export const getAllAccount = async (req: Request, res: Response) => {
  const allAccount = await prisma.crowdModel.findMany();
  try {
    return res.status(STATUS.BAD).json({
      message:
        "You're successfully using the list of all users registered on the platform",
      data: allAccount,
    });
  } catch (error) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while getting all registered users",
    });
  }
};

export const CreateAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const account = await prisma.crowdModel.create({
      
      data: { email, password },
    });
    return res.status(STATUS.CREATED).json({
      message: "Account created successfully",
      data: account,
    });
  } catch (error:any) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while creating account",
      data: error.message,
      error
    });
  }
};
