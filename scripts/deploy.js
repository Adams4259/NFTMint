// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
 //Grab the correct factory
 const NFTMint = await ethers.getContractFactory("NFTMint");

 //Start deployment, returning a promise that resolves to a contract object
 const nftMInt = await NFTMint.deploy(); // Instance of the contract
 console.log("Contract deployed to address:", nftMInt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
