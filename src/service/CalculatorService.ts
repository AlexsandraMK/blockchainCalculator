import contract from "../contract/calculatorContract";
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
      await contract.setFirstValue(firstValue);
      await contract.setSecondValue(secondValue);

      let result = 0;
      switch (operation) {
        case OperationEnum.add:
          result = await contract.add();
          break;
        case OperationEnum.subtract:
          result = await contract.subtract();
          break;
        case OperationEnum.multiply:
          result = await contract.multiply();
          break;
        case OperationEnum.divide:
          result = await contract.divide();
          break;
        case OperationEnum.power:
          result = await contract.power();
          break;
      }

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
