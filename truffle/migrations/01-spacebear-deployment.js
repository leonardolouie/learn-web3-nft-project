const SpaceBear = artifacts.require("SpaceBear");

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts);
  deployer.deploy(SpaceBear, accounts[0]);
};
