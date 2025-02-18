import { ethers } from "ethers";

export const calculatorABI: ethers.Interface | ethers.InterfaceAbi = [
  {
    inputs: [
      {
        internalType: "int16",
        name: "value",
        type: "int16",
      },
    ],
    name: "setFirstValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "value",
        type: "int16",
      },
    ],
    name: "setSecondValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subtract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "multiply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "divide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "power",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getResult",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
