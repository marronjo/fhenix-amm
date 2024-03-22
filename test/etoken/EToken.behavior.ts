import { expect } from "chai";
import hre from "hardhat";

export function shouldBehaveLikeCounter(): void {
  it("should transfer encrypted amount successfully to receiver", async function () {
    const amountToTransfer = 100;

    const eAmountToTransfer = await this.instance.instance.encrypt_uint32(
      amountToTransfer,
    );
    const eAmountSent = await this.etoken.connect(this.signers.admin)["transferEncrypted(address,(bytes))"](this.signers.user1.address, eAmountToTransfer);

    // const amountSent = this.instance.instance.unseal(
    //   await this.etoken.getAddress(),
    //   eAmountSent,
    // );

    // console.log(amountSent);

    const balanceAdmin = await this.etoken
    .connect(this.signers.admin)
    .balanceOf(this.signers.admin.address);

    // const balanceAdmin = this.instance.instance.unseal(
    //   await this.etoken.getAddress(),
    //   eBalanceAdmin,
    // );

    console.log(`Admin Balance : ${balanceAdmin}`);

    // const amount = this.instance.instance.unseal(
    //   await this.counter.getAddress(),
    //   eAmount,
    // );

    //expect(Number(amount) === amountToCount);
  });
}
