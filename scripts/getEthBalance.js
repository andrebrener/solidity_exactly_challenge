// scripts/index.js
async function main() {

    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    
    const ETHPool = await ethers.getContractFactory("ETHPool");
    const ethPool = await ETHPool.attach(address);

    [team, user1, user2] = await hre.ethers.getSigners();

    // User1 Deposit
    const firstDeposit = ethers.utils.parseEther("0.5");
    await ethPool.connect(user1).memberDeposit({value: firstDeposit})

    // User2 Deposit
    const secondDeposit = ethers.utils.parseEther("1");
    await ethPool.connect(user2).memberDeposit({value: secondDeposit})


    // Team Deposit
    const teamDeposit = ethers.utils.parseEther("3");
    await ethPool.teamDeposit({value: teamDeposit})


    // Values
    const totalBalance = await ethPool.totalDeposited();
    const pendingUser1 = await ethPool.balances(user1.address);
    const pendingUser2 = await ethPool.balances(user2.address);

    console.log("total balance", ethers.utils.formatEther(totalBalance.toString()));
    console.log("User1 balance", ethers.utils.formatEther(pendingUser1.toString()));
    console.log("User2 balance", ethers.utils.formatEther(pendingUser2.toString()));


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });