// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  let inkToken;
  //ink core
  const Ink = await hre.ethers.getContractFactory("Ink");

  //ink token
  inkToken = await hre.ethers.getContractFactory("InkToken");
  inkToken = await inkToken.deploy();
  console.log("InkToken deployed to:", inkToken.address);
  //deploy ink token
  await inkToken.deployed();

  //deploy ink core with necessary constructor values
  const ink = await Ink.deploy(
    inkToken.address,
    "0xe26C94adb17e135a09478c5f41D21af338345DDD"
  );

  await ink.deployed();

  console.log("Ink deployed to:", ink.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
