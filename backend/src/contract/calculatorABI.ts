import { ethers } from "ethers";

export const calculatorABI: ethers.Interface | ethers.InterfaceAbi = [
  {
    inputs: [
      {
        internalType: "int16",
        name: "firstValue",
        type: "int16",
      },
      {
        internalType: "int16",
        name: "secondValue",
        type: "int16",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "firstValue",
        type: "int16",
      },
      {
        internalType: "int16",
        name: "secondValue",
        type: "int16",
      },
    ],
    name: "subtract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "firstValue",
        type: "int16",
      },
      {
        internalType: "int16",
        name: "secondValue",
        type: "int16",
      },
    ],
    name: "multiply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "firstValue",
        type: "int16",
      },
      {
        internalType: "int16",
        name: "secondValue",
        type: "int16",
      },
    ],
    name: "divide",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "firstValue",
        type: "int16",
      },
      {
        internalType: "int16",
        name: "secondValue",
        type: "int16",
      },
    ],
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
