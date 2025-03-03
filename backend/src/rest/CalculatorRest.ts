const express = require("express");
import { Request, Response } from "express";
import NullPointerError from "../error/NullPointerError";
import TypeError from "../error/TypeError";
import calculatorService from "../service/CalculatorService";
import { isOperation } from "../enum/OperationEnum";

const calculatorRouter = express.Router();

const isNumber = (
  variable: unknown,
  variableName: string
): variable is number => {
  {
    if (variable === undefined || variable === null) {
      throw new NullPointerError(variableName);
    }

    const numValue = Number(variable);
    if (isNaN(numValue)) {
      throw new TypeError(variableName, "number");
    }

    return true;
  }
};

calculatorRouter.post("/calc", async (req: Request, res: Response) => {
  const firstValue = req.body.firstValue;
  const secondValue = req.body.secondValue;
  const operation = req.body.operation;

  try {
    if (
      isNumber(secondValue, "secondValue") &&
      isNumber(firstValue, "firstValue") &&
      isOperation(operation, "operation")
    )
      await calculatorService
        .calcAsync(firstValue, secondValue, operation)
        .then((sum) => {
          res.json({ result: sum });
        });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

export default calculatorRouter;
