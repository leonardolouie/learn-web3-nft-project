const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const { expect } = require("chai");

describe("SpaceBear", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const SpaceBear = await ethers.getContractFactory("SpaceBear");
    const spaceBear = await SpaceBear.deploy(owner);
    return { spaceBear, owner, otherAccount };
  }

  it("Deployment is correct", async function () {
    const { spaceBear } = await loadFixture(deployOneYearLockFixture);
    expect(spaceBear).to.not.equal(undefined);
  });

  it("Should mint a NFT", async function () {
    const { spaceBear, otherAccount } = await loadFixture(
      deployOneYearLockFixture
    );
    await spaceBear.safeMint(otherAccount.address, "spacebear_json.1");
    expect(await spaceBear.ownerOf(0)).to.equal(otherAccount.address);
  });
});
