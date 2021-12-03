// @ts-ignore
import { ethers } from "ethers";
import { setProvider, setSigner, signedIn } from "store/reducers/accounts";

export default async function requestAccounts(dispatch) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await window.ethereum.enable();

    dispatch(setProvider(provider));
    let signer = await provider.getSigner();
    dispatch(setSigner(signer));
    const accounts = await signer.getAddress();
    console.log(accounts);
    dispatch(signedIn(true));

    return signer;
  } catch (error) {
    dispatch(signedIn(false));
    console.error(error);
    return false;
  }
}
