(async () => {
  try {
    const SpaceBear = await hre.ethers.getContractFactory("SpaceBear");
    const [account] = await hre.ethers.getSigners();
    const spaceBearInstance = await SpaceBear.deploy(account);
    console.log(`SpaceBear deployed ${spaceBearInstance.target}`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
