import { Response, Request, NextFunction } from "express";
import express, { Express } from "express"
import { myDataSource } from "../app-data-source";
import { Letter } from "../model/repository/entity/letter";
const router = express.Router();
export const routes = (app: Express) => {

  
  app.get("/letters", async (req: Request, res: Response, next: NextFunction) => {
    console.log("Hello");

    const letters = await myDataSource.getRepository(Letter).find();
    res.json(letters);
    next();
  })}