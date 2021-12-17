require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const { ALCHEMY_API_KEY, DEPLOYER_MNEMONIC, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: { mnemonic: DEPLOYER_MNEMONIC }
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};