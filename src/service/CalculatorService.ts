import { contract, provider, wallet } from "../contract/calculatorContract";
import { OperationEnum } from "../enum/OperationEnum";
import EthereumError from "../error/EthereumError";
import NullPointerError from "../error/NullPointerError";
import ethereumClient from "../client/EthereumClient";

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
      const nonce = await ethereumClient.getTransactionNonceAsync(
        provider,
        wallet
      );

      const [setFirstTransaction, setSecondTransaction] = await Promise.all([
        contract.setFirstValue(firstValue, { nonce }), 
        contract.setSecondValue(secondValue, { nonce: nonce + 1 }), 
      ]);

      await Promise.all([
        setFirstTransaction.wait(),
        setSecondTransaction.wait(),
      ]);

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
