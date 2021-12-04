// @ts-ignore
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountData, signedIn } from "store/reducers/accounts";

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
      let signer = await provider.getSigner();
      const address = await signer.getAddress();

      dispatch(
        setAccountData({
          address: address,
          signedIn: true,
          provider: provider,
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
