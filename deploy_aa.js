const hre = require("hardhat");

async function main() {
  // Official EntryPoint address on most testnets/mainnet
  const ENTRY_POINT = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

  const Factory = await hre.ethers.getContractFactory("WalletFactory");
  const factory = await Factory.deploy(ENTRY_POINT);

  await factory.waitForDeployment();
  console.log(`Wallet Factory deployed to: ${await factory.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
