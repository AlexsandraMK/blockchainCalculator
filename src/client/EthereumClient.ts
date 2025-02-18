import { ethers } from "ethers";
import EthereumError from "../error/EthereumError";

class EthereumClient {
  connectToEthereum = (rpcUrl: string) => {
    try {
      const provider = new ethers.JsonRpcProvider(rpcUrl);
      console.log(`Подключено к сети`);
      return provider;
    } catch (error) {
      throw new EthereumError("Не удалось подключиться к Ethereum сети");
    }
  };

  connectWalet = (privateKey: string, provider: ethers.JsonRpcProvider) => {
    try {
      const wallet = new ethers.Wallet(privateKey, provider);
      console.log(`Кошелек подключен`);
      return wallet;
    } catch (error) {
      throw new EthereumError("Не удалось подключить кошелек к Ethereum сети");
    }
  };

  createContractInstance = (
    wallet: ethers.Wallet,
    contractAddress: string,
    contractABI: ethers.Interface | ethers.InterfaceAbi
  ) => {
    try {
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        wallet
      );
      console.log(`Контракт создан`);
      return contract;
    } catch (error) {
      throw new EthereumError("Не удалось создать контракт");
    }
  };

  getTransactionNonceAsync = async (
    provider: ethers.Provider,
    wallet: ethers.Wallet
  ) => {
    try {
      const nonce = await provider.getTransactionCount(
        wallet.address,
        "latest"
      );
      return nonce;
    } catch (error) {
      throw new EthereumError("Не удалось получить nonce");
    }
  };
}

const ethereumClient = new EthereumClient();

export default ethereumClient;
