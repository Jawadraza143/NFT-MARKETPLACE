require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./contracts", // Explicit path to contracts
    artifacts: "./artifacts", // Ensure this folder exists
  },
  networks: {
    sepolia: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};