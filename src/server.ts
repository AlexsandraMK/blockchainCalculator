const express = require("express");
const path = require("path");
import { Request, Response } from "express";
const server = express();
const port = 3000;

server.use(express.json());

import calculatorRouter from "./rest/CalculatorRest";

server.use(calculatorRouter);

server.use(express.static(path.join(__dirname, "../", "frontend", "build")));

server.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../", "frontend", "build", "index.html"));
});

// Запуск сервера
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
