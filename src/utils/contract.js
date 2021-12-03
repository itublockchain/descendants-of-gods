import { ethers } from "ethers";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
/*
export default const contract = 
                new ethers.Contract(
                    escrowAddress,
                    Escrow.abi,
                    provider
                );
*/
