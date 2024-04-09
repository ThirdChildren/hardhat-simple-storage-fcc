const { task } = require("hardhat/config")

task("interact-contract", "Interact with a deployed smart contract")
    .addParam("contractAddress", "The address of the deployed contract")
    .addParam("methodName", "The name of the method to call")
    .addParam(
        "methodParams",
        "Parameters for the method",
        undefined,
        types.json
    )
    .setAction(async (taskArgs, hre) => {
        const { contractAddress, methodName, methodParams } = taskArgs
        const Contract = await hre.ethers.getContractAt(
            "YourContractName",
            contractAddress
        )
        const result = await Contract[methodName](...methodParams)
        console.log(`Result of calling ${methodName}: ${result}`)
    })

module.exports = {}
