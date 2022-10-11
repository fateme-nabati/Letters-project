import express from 'express';
// import { Response, Request, NextFunction } from "express";
import { routes } from "./routes"

// import { Request, Response } from "express"
import { Letter } from "../model/repository/entity/letter"
import { myDataSource } from "../app-data-source"
import test from 'node:test';

// create and setup express app
const host = "localhost";
const port = 8000;
const app = express();

routes(app)


// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })




// app.get("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     return res.send(results)
// })

// app.post("/users", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).create(req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })

// // start express server
// app.listen(3000)

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
