import Button from "components/Button";
import React from "react";
import styles from "./LandingHero.module.scss";
import { useNavigate } from "react-router";
import { setStage, STAGES } from "store/reducers/game";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const LandingHero = () => {
  const dispatch = useDispatch();

  const { MatchMakerContract } = useSelector(
    (state: RootState) => state.contracts
  );

  const { address: signerAddress } = useSelector(
    (state: RootState) => state.account
  );

  return (
    <div className={styles["hero-container"]}>
      <h1>
        Descendants of God is a decentralized, strategic, PvP card game
        universe.
      </h1>
      <p>Multiconceptual universe for multiplayer board games</p>
      <Button achilles type="secondary" size="large">
        Launch Game
      </Button>
    </div>
  );
};

export default LandingHero;
