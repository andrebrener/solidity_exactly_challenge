async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);

    this.ETHPool = await hre.ethers.getContractFactory("ETHPool");
    this.ethPool = await this.ETHPool.deploy();
  
    console.log("Token address:", ethPool.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });