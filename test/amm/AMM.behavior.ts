import { expect } from "chai";
import { EncryptionTypes } from "fhenixjs";
import hre from "hardhat";

export function shouldBehaveLikeAMM(): void {
  it("should allow user to add token0 liquidity", async function () {
    const supplyAmount = 5;

    const esupplyAmount = await this.ammInstance.instance.encrypt_uint8(
      supplyAmount,
    );

    const eAdminBalanceToken0Before = await this.etoken0.balanceOfEncrypted(this.signers.admin.address, this.etoken0Instance.permission);

    const adminBalanceToken0Before = this.etoken0Instance.instance.unseal(
      await this.etoken0.getAddress(),
      eAdminBalanceToken0Before,
    );

    await this.amm.connect(this.signers.admin).addSingleTokenLiquidity(true, esupplyAmount);

    const eAdminBalanceToken0After = await this.etoken0.balanceOfEncrypted(this.signers.admin.address, this.etoken0Instance.permission);

    const adminBalanceToken0After = this.etoken0Instance.instance.unseal(
      await this.etoken0.getAddress(),
      eAdminBalanceToken0After,
    );

    expect(Number(adminBalanceToken0Before) - supplyAmount).to.equal(Number(adminBalanceToken0After));
  });

  it("should allow user to add token1 liquidity", async function () {
    const supplyAmount = 5;

    const esupplyAmount = await this.ammInstance.instance.encrypt_uint8(
      supplyAmount,
    );

    const eAdminBalanceToken1Before = await this.etoken1.balanceOfEncrypted(this.signers.admin.address, this.etoken1Instance.permission);

    const adminBalanceToken1Before = this.etoken1Instance.instance.unseal(
      await this.etoken1.getAddress(),
      eAdminBalanceToken1Before,
    );

    await this.amm.connect(this.signers.admin).addSingleTokenLiquidity(false, esupplyAmount);

    const eAdminBalanceToken1After = await this.etoken1.balanceOfEncrypted(this.signers.admin.address, this.etoken1Instance.permission);

    const adminBalanceToken1After = this.etoken1Instance.instance.unseal(
      await this.etoken1.getAddress(),
      eAdminBalanceToken1After,
    );

    expect(Number(adminBalanceToken1Before) - supplyAmount).to.equal(Number(adminBalanceToken1After));
  });

  it("should allow user to perform swap", async function () {
    const supplyAmount = 5;

    const esupplyAmount = await this.ammInstance.instance.encrypt_uint8(
      supplyAmount
    );

    //how to encrypt ebool ?
    //const eZeroForOne = await this.ammInstance.instance.encrypt(0);

    //await this.amm.connect(this.signers.admin).swap(eZeroForOne, esupplyAmount);
  });
}
