import { CFTCollection } from "./interface";
import CFT from "../../constant/abi/chefToken.json";
import { ethers } from "ethers";

const getSigner = async (): Promise<ethers.Signer | null> => {
    if (typeof window !== 'undefined' && window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        return await provider.getSigner();
    }

    return null;
}

const contracts = {
    deploy: async(data: CFTCollection): Promise<string> => {
        const artifacts = artifact()
        const signer = await getSigner()
        if (!signer) {
            throw new Error("No signer available. Please connect your wallet.");
        }

        const {abi, bytecode} = artifacts
        data.initialOwner = await signer.getAddress()
        
        try {
            const factory = new ethers.ContractFactory(abi, bytecode, signer)

            const contract = await factory.deploy(data);

            await contract.deploymentTransaction();

            const address = await contract.getAddress()

            return address;
        } catch (error: any) {
            console.log(`deploy contract error ${error}`);
            
            return error
        }
    }
}

const artifact = (): any => {
    return CFT
}

export { contracts }