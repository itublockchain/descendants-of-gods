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
  GodContract: "0x53a129BfA6eb5d4e4AbE93E2AC685a5c6ab568Ec",
  ArenaContract: "0x0AC222E30846EfB98942545E595dfe1190046901",
  SonsContract: "0xc0d13b075cFe80e5eEc2B67E1A50DcC174ddb3A2",
  XpContract: "0x7123660C49Ea63364992167b309055271101b209",
  BiliraContract: "0xb8405e04C54550e1204260957E80929C481001f7",
  MatchMakerContract: "0x509Dd9D637664CDFA3c3c644E20a75b333C9AC16",
  MarketplaceContract: "0x98f7e99CEeb4889575Fe025D22A353f164B291A0"
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

      MatchMakerContract.on("WaitingLeave", (gameId: any) => {
        dispatch(setStage(STAGES.SelectMap));
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
