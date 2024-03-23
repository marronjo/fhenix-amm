import { expect } from "chai";
import hre from "hardhat";

export function shouldBehaveLikeAMM(): void {
  it("should allow user to add liquidity", async function () {

    console.log("should allow user to add liquidity");
    // const amountToWrap = 100;

    // const adminBalanceBefore = await this.etoken.balanceOf(this.signers.admin.address);

    // //should burn 100 unencrypted tokens and wrap them to encrypted tokens
    // await this.etoken.connect(this.signers.admin).wrap(amountToWrap);

    // const eBalance = await this.etoken.balanceOfEncrypted(this.signers.admin.address, this.instance.permission);

    // const encryptedTokensBalance = this.instance.instance.unseal(
    //   await this.etoken.getAddress(),
    //   eBalance,
    // );

    // const adminBalanceAfter = await this.etoken.balanceOf(this.signers.admin.address);

    // expect(Number(encryptedTokensBalance) === amountToWrap);
    // expect(Number(adminBalanceAfter) === Number(adminBalanceBefore) - amountToWrap);
  });
}
