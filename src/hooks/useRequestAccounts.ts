// @ts-ignore
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountData, signedIn } from "store/reducers/accounts";
import {
  godABI,
  boardABI,
  flashABI,
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
  GodContract: "0x394C8bd7f343EE9bB7c831Af8595aC4C20c36Ee7",
  ArenaContract: "0xC5E254E91B4C57a7E1579D53f778FEAFf1aA4421",
  SonsContract: "0xC32488f6CaA666ccb70780e20aFaa28b3A12F363",
  XpContract: "0x012FEdd7b6838BD6989AE325B76C0785F0BA7EaF",
  BiliraContract: "0xfA245Dc1B7af41cd7e89eF32659cC80966c90c23",
  MatchMakerContract: "0xb6716aB863D989C1Da014a1dc7D16D903058FB40",
  MarketplaceContract: "0xC8393b1A36099786c5A7b1313Dc6d862ccd46F5B"
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

      MatchMakerContract.on("WaitingLeave", () => {
        dispatch(setStage(STAGES.SelectMap));
      });

      MatchMakerContract.on("GameStarted", (_, __) => {
        console.log("game started");

        dispatch(setStage(STAGES.InGame));
      });

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
