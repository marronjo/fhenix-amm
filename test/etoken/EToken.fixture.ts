import type { Counter, EToken } from "../../types";
import axios from "axios";
import hre from "hardhat";

export async function deployETokenFixture(): Promise<{
  etoken: EToken;
  address: string;
}> {
  const accounts = await hre.ethers.getSigners();
  const contractOwner = accounts[0];

  const EToken = await hre.ethers.getContractFactory("EToken");
  const etoken = await EToken.connect(contractOwner).deploy("EToken", "ETK");

  await etoken.waitForDeployment();
  const address = await etoken.getAddress();

  return { etoken, address };
}

export async function getTokensFromFaucet(numSigners: number = 2) {
  if (hre.network.name === "localfhenix") {
    const signers = await hre.ethers.getSigners();

    for(let i = 0; i < numSigners; i++){
      if ((await hre.ethers.provider.getBalance(signers[i].address)).toString() === "0") {
        await hre.fhenixjs.getFunds(signers[i].address);
      }
    }
  }
}
