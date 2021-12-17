require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const { ALCHEMY_API_KEY, DEPLOYER_MNEMONIC } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: { mnemonic: DEPLOYER_MNEMONIC }
    }
  }
};