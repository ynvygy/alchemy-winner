const hre = require("hardhat");

async function main() {
 
  const winnerContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  const WeekFourWinner = await hre.ethers.getContractFactory("WeekFourWinner");
  const eventWinner = await WeekFourWinner.deploy();

  await eventWinner.deployed();

  console.log(`contract is deployed to ${eventWinner.address}`);

  await eventWinner.callWinner(winnerContractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});