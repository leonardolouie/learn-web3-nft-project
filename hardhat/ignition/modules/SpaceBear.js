// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpaceBear", (m) => {
  const account = m.getAccount(0);
  const spaceBear = m.contract("SpaceBear", [account]);
  console.log(`Deployed contract ${spaceBear.contractName} ${spaceBear.id}`);
  return { spaceBear };
});
