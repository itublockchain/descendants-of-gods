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
  GodContract: "0xB9A80eB2c6F46D14A75F3923a8C9A84716E5A356",
  ArenaContract: "0x3D2836ea5957AC6092c13f43b33f48756e3d5f16",
  SonsContract: "0x9d684F30229aE04c4ba8C2A92cA2A3341Ada7D7a",
  XpContract: "0x21415B2B48d5c603b69BbCF5F969611604ad595D",
  BiliraContract: "0x3AAe6Badf10b2856B2FB914d5672536C70B52C4e",
  MatchMakerContract: "0xeF99b61ce33F83bC888A27b4d78C6B39f3F11695",
  MarketplaceContract: "0x185d437370A9DAE0D3f153d34CffA4929AF7eC11"
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
