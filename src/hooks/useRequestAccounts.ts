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
  GodContract: "0x3fC3D5a080f370aBa851b29E914955E2f2640869",
  ArenaContract: "0x5F9DEaA5da071E3fE8d83ad06C8c8dAE0ACc66F0",
  SonsContract: "0xe80A8A52Dcd1644E12A603f570566B3AF7c13440",
  XpContract: "0x2fe6B047140D120CD39247C55fdFff76970cf08A",
  BiliraContract: "0x8619525909B89a911e70FbAF3D24FBD504c6DDd2",
  MatchMakerContract: "0x08b082714a210F3B877ec770f462c5491881CA12",
  MarketplaceContract: "0x772ddC853194a6A110e2a11E718E66E5CCa4ACec",
  BoardContract: "0x9A02427186e667A946F6A85b271303e8A9Af06f6",
  FlashContract: "0xF2b562f994130aDC7AF35BB05DCB3db514DA1d75"
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
      const BoardContract = new ethers.Contract(
        contractAddresses.BoardContract,
        boardABI,
        provider
      );
      const FlashContract = new ethers.Contract(
        contractAddresses.FlashContract,
        flashABI,
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
          BoardContract,
          FlashContract,
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
