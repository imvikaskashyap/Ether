import { ethers, JsonRpcProvider, parseEther } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const provider = new JsonRpcProvider(
  "https://mainnet.infura.io/v3/64895adefbaf479583eeadea539298a4"
);

async function main() {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract_address = "0xec70714Fb3cf41Ab01894786b9DCaf97b75F5635";
  const ABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "NotAnOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "TaskNotCompleted",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "TaskNotExist",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256",
        },
      ],
      name: "TaskComplete",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "work",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "TaskCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "work",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "TaskStatusChange",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "TodosCompleted",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_work",
          type: "string",
        },
      ],
      name: "createTask",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRevenue",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getReward",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTasks",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "work",
              type: "string",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          internalType: "struct ToDo.task[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "setOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "toggleTask",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withDraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];

  const contract = new ethers.Contract(contract_address, ABI, signer);

  const creatTask_tx = await contract.createTask("clean the window", {
    value: parseEther("0.1"),
  });

  await creatTask_tx.wait();

  console.log(creatTask_tx);
}

main();

