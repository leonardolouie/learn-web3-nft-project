const SpaceBear = artifacts.require("SpaceBear");
const truffleAssert = require("truffle-assertions");

contract("Space Bear", (accounts) => {
  it("should credit a NFT to a specific account", async () => {
    const spaceBearInstance = await SpaceBear.deployed();
    let txResult = await spaceBearInstance.safeMint(
      accounts[3],
      "spacebear_1.json"
    );

    truffleAssert.eventEmitted(txResult, "Transfer", {
      from: "0x0000000000000000000000000000000000000000",
      to: accounts[3],
      tokenId: web3.utils.toBN("0"),
    });
    assert.equal(
      await spaceBearInstance.ownerOf(0),
      accounts[3],
      "Owner of Token 1 is not equal to account 2"
    );
  });
});
