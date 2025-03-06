const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");

  // Deploy the contract
  const nftMarket = await NFTMarket.deploy();

  // Wait for the contract to be deployed
  await nftMarket.waitForDeployment();

  // Log the deployed contract address
  console.log("NFTMarket deployed to:", await nftMarket.getAddress());
}

// Run the deployment script
main()
  .then(() => process.exit(0)) // Exit with success code
  .catch((error) => {
    console.error(error); // Log any errors
    process.exit(1); // Exit with error code
  });