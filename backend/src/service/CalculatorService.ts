import { contract } from "../contract/calculatorContract";
import { OperationEnum } from "../enum/OperationEnum";
import EthereumError from "../error/EthereumError";
import NullPointerError from "../error/NullPointerError";

class CalculatorService {
  calcAsync = async (
    firstValue: number,
    secondValue: number,
    operation: OperationEnum
  ) => {
    if (contract === undefined || contract === null) {
      throw new NullPointerError("contract");
    }

    try {
      let calcTransaction;
      switch (operation) {
        case OperationEnum.add:
          calcTransaction = await contract.add(firstValue, secondValue);
          break;
        case OperationEnum.subtract:
          calcTransaction = await contract.subtract(firstValue, secondValue);
          break;
        case OperationEnum.multiply:
          calcTransaction = await contract.multiply(firstValue, secondValue);
          break;
        case OperationEnum.divide:
          calcTransaction = await contract.divide(firstValue, secondValue);
          break;
        case OperationEnum.power:
          calcTransaction = await contract.power(firstValue, secondValue);
          break;
      }

      await calcTransaction.wait();

      const result = await contract.getResult();

      return Number(result);
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
      )
        throw new EthereumError(error.message);
      else throw new EthereumError("Возникла ошибка при вычислении");
    }
  };
}

const calculatorService = new CalculatorService();
export default calculatorService;
