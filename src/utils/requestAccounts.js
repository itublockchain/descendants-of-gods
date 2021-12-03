// @ts-ignore
import { ethers } from "ethers";
import { setAccountData, signedIn } from "store/reducers/accounts";
import registerEvents from "./registerEvents";

export default async function requestAccounts(dispatch) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    registerEvents(provider);
    await window.ethereum.send("eth_requestAccounts");
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
