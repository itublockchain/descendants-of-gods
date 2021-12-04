import Button from "components/Button";
import React from "react";
import styles from "./LandingHero.module.scss";
import { useNavigate } from "react-router";
import { setStage, STAGES } from "store/reducers/game";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const LandingHero = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { MatchMakerContract } = useSelector(
    (state: RootState) => state.contracts
  );

  const { address: signerAddress } = useSelector(
    (state: RootState) => state.account
  );

  const joinMatch = async () => {
    if (MatchMakerContract) {
      const [isPlayerInBoard, address] = await MatchMakerContract.arenaToPlayer(
        1
      );

      console.log(address, signerAddress, isPlayerInBoard);

      if (isPlayerInBoard && address === signerAddress) {
        dispatch(setStage(STAGES.MatchPlayers));
      }
    }
  };

  return (
    <div className={styles["hero-container"]}>
      <h1>NFTs thrive here.</h1>
      <p>
        SuperFarm is a passionate community building at the intersection of NFTs
        and DeFi.
      </p>
      <Button
        achilles
        onClick={async () => await joinMatch()}
        type="secondary"
        size="large"
      >
        Launch Game
      </Button>
    </div>
  );
};

export default LandingHero;
