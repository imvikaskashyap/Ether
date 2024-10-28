import {  ethers,  JsonRpcProvider,  } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const provider = new JsonRpcProvider(
    "https://mainnet.infura.io/v3/64895adefbaf479583eeadea539298a4"
  );

  
  async function  main  (){

    const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

    let tx = {
        to:"0x06A2b6793F6468336bC38a4cb8De7c57B0aFD300",
        value:ethers.parseEther("0.0000001")
    }

    let sendEther = await signer.sendTransaction(tx)

        await sendEther.wait()

    console.log(sendEther)

  }

  main()