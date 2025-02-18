import { JsonRpcProvider, Wallet } from "ethers";
import ethereumClient from "../client/EthereumClient";
import { calculatorABI } from "./calculatorABI";

require("dotenv").config();

export let provider : JsonRpcProvider;
export let wallet : Wallet;

function setupContract() {
  const INFURA_API_URL = process.env.INFURA_API_URL || "";
  const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";

  provider = ethereumClient.connectToEthereum(INFURA_API_URL);

  wallet = ethereumClient.connectWalet(PRIVATE_KEY, provider);

  let contract = ethereumClient.createContractInstance(
    wallet,
    CONTRACT_ADDRESS,
    calculatorABI
  );

  return contract;
}

export const contract = setupContract();
