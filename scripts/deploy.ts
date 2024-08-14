import { ethers } from "hardhat";

async function main() {
    try {
        const initialSupply = ethers.parseUnits("1000000", 18);
    
        const MyToken = await ethers.getContractFactory("MyToken");
        const myToken = await MyToken.deploy(initialSupply);
    
        await myToken.waitForDeployment();
    
        console.log("MyToken deployed to: ", await myToken.getAddress());
        
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

main();