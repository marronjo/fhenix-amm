import { expect } from "chai";
import hre from "hardhat";

export function shouldBehaveLikeAMM(): void {
  it("should allow user to add liquidity", async function () {

    const supplyAmount = 100;

    const esupplyAmount = await this.ammInstance.instance.encrypt_uint32(
      supplyAmount,
    );

    const ePoolShares = await this.amm.connect(this.signers.admin).addLiquidity(esupplyAmount, esupplyAmount, this.ammInstance.permission);

    //console.log(ePoolShares[0].toString(), ePoolShares[1].toString());

    const poolShares = this.ammInstance.instance.unseal(
      await this.amm.getAddress(),
      ePoolShares
    );

    console.log("liquidity0or1Zero", Boolean(poolShares));

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
  }).timeout(100000);
}
