// @ts-ignore
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountData, signedIn } from "store/reducers/accounts";
import { godABI, boardABI, flashABI, marketplaceABI } from "abi";
import { setContractData } from "store/reducers/contracts";

interface WindowInterface {
  ethereum: any;
}
declare const window: Window & WindowInterface;

export default function useRequestAccounts() {
  const dispatch = useDispatch();

  const requestAccounts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await window.ethereum.enable();

      await provider.send("eth_requestAccounts", []);
      let signer = await provider.getSigner();
      const address = await signer.getAddress();

      const GodContract = new ethers.Contract(
        "0x646bc1323A7237A8901CF1Ae97bcAE0F95c0cC7f",
        godABI,
        provider
      );
      const BoardContract = new ethers.Contract(
        "0x9A02427186e667A946F6A85b271303e8A9Af06f6",
        boardABI,
        provider
      );
      const FlashContract = new ethers.Contract(
        "0xF2b562f994130aDC7AF35BB05DCB3db514DA1d75",
        flashABI,
        provider
      );
      const MarketplaceContract = new ethers.Contract(
        "0x7439B5441634e56E7bF71B3Ed8eEc2c34885Bb78",
        marketplaceABI,
        provider
      );

      dispatch(
        setAccountData({
          address: address,
          signedIn: true,
          provider: provider,
        })
      );

      dispatch(
        setContractData({
          GodContract,
          BoardContract,
          FlashContract,
          MarketplaceContract,
        })
      );

      return signer;
    } catch (error) {
      dispatch(signedIn(false));
      return false;
    }
  };

  return { requestAccounts };
}
