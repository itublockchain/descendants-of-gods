// @ts-ignore
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountData, signedIn } from "store/reducers/accounts";
import {
  godABI,
  marketplaceABI,
  matchMakerABI,
  arenaABI,
  biliraABI,
  sonsABI,
  xpABI
} from "abi";
import { setContractData } from "store/reducers/contracts";
import { checkIfRightNetwork } from "utils/checkIfRightNetwork";
import { setStage, STAGES } from "store/reducers/game";

interface WindowInterface {
  ethereum: any;
}
declare const window: Window & WindowInterface;

const AVALANCHE_NETWORK = {
  id: "0xa869",
  name: "Avalanche Fuji C Chain",
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" }
};

const contractAddresses = {
  GodContract: "0x1D0dD51873a829D60b637485F79ed21837287d09",
  ArenaContract: "0xa35f4e2ebEEc51B59BC2f539022643B607095676",
  SonsContract: "0x9A7f46552172bfC99385868134e363C84CCF7D03",
  XpContract: "0x9F485384Af89d31850f2872C7CF691366c93F521",
  BiliraContract: "0x34C07cc992A1286A955fD139C53fc2980a6b23B2",
  MatchMakerContract: "0xd8CA5DE48b9A6307A4709632e4CAf18940903017",
  MarketplaceContract: "0x1c4B99c5a9E542D2500C3B3Cfcd25aD25CFF5373"
};

export default function useRequestAccounts() {
  const dispatch = useDispatch();

  const requestAccounts = async () => {
    try {
      await checkIfRightNetwork(AVALANCHE_NETWORK);
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      await provider.send("eth_requestAccounts", []);
      let signer = await provider.getSigner();
      const address = await signer.getAddress();

      const GodContract = new ethers.Contract(
        contractAddresses.GodContract,
        godABI,
        provider
      );
      const MarketplaceContract = new ethers.Contract(
        contractAddresses.MarketplaceContract,
        marketplaceABI,
        provider
      );

      const MatchMakerContract = new ethers.Contract(
        contractAddresses.MatchMakerContract,
        matchMakerABI,
        provider
      );

      const ArenaContract = new ethers.Contract(
        contractAddresses.ArenaContract,
        arenaABI,
        provider
      );

      const BiliraContract = new ethers.Contract(
        contractAddresses.BiliraContract,
        biliraABI,
        provider
      );

      const SonsContract = new ethers.Contract(
        contractAddresses.SonsContract,
        sonsABI,
        provider
      );

      const XpContract = new ethers.Contract(
        contractAddresses.XpContract,
        xpABI,
        provider
      );

      dispatch(
        setAccountData({
          address: address,
          signedIn: true,
          provider: provider,
          signer
        })
      );

      dispatch(
        setContractData({
          GodContract,
          MarketplaceContract,
          MatchMakerContract,
          ArenaContract,
          BiliraContract,
          SonsContract,
          XpContract
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
