import ethereumClient from "../client/EthereumClient";
import { calculatorABI } from "./calculatorABI";

require("dotenv").config();

function setupContract() {
  const INFURA_API_URL = process.env.INFURA_API_URL || "";
  const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";

  let provider = ethereumClient.connectToEthereum(INFURA_API_URL);

  let wallet = ethereumClient.connectWalet(PRIVATE_KEY, provider);

  let contract = ethereumClient.createContractInstance(
    wallet,
    CONTRACT_ADDRESS,
    calculatorABI
  );

  return contract;
}

const contract = setupContract();

export default contract;
