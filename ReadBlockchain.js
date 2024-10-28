import {  formatEther, JsonRpcProvider,  } from "ethers";

const provider = new JsonRpcProvider(
  "https://mainnet.infura.io/v3/64895adefbaf479583eeadea539298a4"
);

const queryBlockchain = async () => {
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);

  const balance = await provider.getBalance(
    "0x518489F9ed41Fc35BCD23407C484F31897067ff0"
  );
  console.log("Balance: ", balance);

  const balanceEther = formatEther(balance);

  console.log("Balance in Wei:", balanceEther);
};

queryBlockchain();



