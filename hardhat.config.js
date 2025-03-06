require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./contracts", // Path to your Solidity files
    artifacts: "./artifacts", // Path to store compiled artifacts
  },
  networks: {
    sepolia: {
      url: process.env.API_URL, // Ensure this is defined in your .env file
      accounts: [process.env.PRIVATE_KEY], // Ensure this is defined in your .env file
    },
  },
};