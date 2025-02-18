import NullPointerError from "../error/NullPointerError";
import TypeError from "../error/TypeError";

export enum OperationEnum {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "/",
  power = "^",
}

export let isOperation = (
  variable: unknown,
  variableName: string
): variable is OperationEnum => {
  if (variable === undefined || variable === null) {
    throw new NullPointerError(variableName);
  }

  if (
    typeof variable !== "string" ||
    !(Object.values(OperationEnum).includes(variable as OperationEnum))
  ) {
    throw new TypeError(variableName, "OperationEnum");
  }

  return true;
};
