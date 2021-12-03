// @ts-ignore
import { ethers } from "ethers";
import {
  setAccountData,
  setProvider,
  setSigner,
  signedIn,
} from "store/reducers/accounts";

export default async function requestAccounts(dispatch) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
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
    console.error(error);
    return false;
  }
}
