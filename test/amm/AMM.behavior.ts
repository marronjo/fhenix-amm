import { expect } from "chai";
import hre from "hardhat";

export function shouldBehaveLikeAMM(): void {
  it("should allow user to add liquidity", async function () {

    const supplyAmount = 5;

    const esupplyAmount = await this.ammInstance.instance.encrypt_uint8(
      supplyAmount,
    );

    const eAdminBalanceToken0Before = await this.etoken0.balanceOfEncrypted(this.signers.admin.address, this.etoken0Instance.permission);

    const adminBalanceToken0Before = this.etoken0Instance.instance.unseal(
      await this.etoken0.getAddress(),
      eAdminBalanceToken0Before,
    );

    await this.amm.connect(this.signers.admin).addLiquidity(esupplyAmount, esupplyAmount);

    const eAdminBalanceToken0After = await this.etoken0.balanceOfEncrypted(this.signers.admin.address, this.etoken0Instance.permission);

    const adminBalanceToken0After = this.etoken0Instance.instance.unseal(
      await this.etoken0.getAddress(),
      eAdminBalanceToken0After,
    );

    expect(Number(adminBalanceToken0Before) - supplyAmount).to.equal(Number(adminBalanceToken0After));

  }).timeout(100000);
}
