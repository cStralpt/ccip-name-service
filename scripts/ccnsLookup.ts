import { ethers } from "hardhat";

async function deploy() {
	const factory =
		await ethers.getContractFactory("CrossChainNameServiceLookup");
	const sc = await factory.deploy();
console.log({sc})
return {sc}


}

deploy();
