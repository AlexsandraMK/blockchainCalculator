const express = require("express");
const server = express();
const port = 8080;

server.use(express.json());

import calculatorRouter from "./rest/CalculatorRest";

server.use(calculatorRouter);

// Запуск сервера
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
