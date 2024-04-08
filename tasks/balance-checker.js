const { task } = require("hardhat/config")

task("balance-checker", "Check the balance of an Ethereum account")
    .addParam("account", "The Ethereum account address")
    .setAction(async (taskArgs, hre) => {
        const { account } = taskArgs
        const balance = await hre.ethers.provider.getBalance(account)
        console.log(
            `Balance of ${account}: ${hre.ethers.utils.formatEther(
                balance
            )} ETH`
        )
    })

module.exports = {}
