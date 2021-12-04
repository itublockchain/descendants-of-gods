// @ts-ignore
import Base from "components/Base";
import Board from "components/Board";
import Card from "components/Card";
import { LAYOUT } from "common/constants/layout";
import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import styles from "./Game.module.scss";
import { useSelector } from "react-redux";
import Onboarding from "pages/Game/Onboarding";
import { useEffect, useState } from "react";
import AreaSelector from "pages/Game/AreaSelector";
import Matching from "./Matching";
import CardSelector from "./CardSelector";
import { STAGES } from "store/reducers/game";

const Game = () => {
  const accountState = useSelector((state: RootState) => state.account);
  const { layout, ...gameState } = useSelector(
    (state: RootState) => state.game
  );

  if (accountState.signedIn === null) {
    return null;
  }

  if (accountState.signedIn === false) {
    return <Onboarding />;
  }

  if (gameState.stage === STAGES.SelectMap) {
    return <AreaSelector />;
  }

  if (gameState.stage === STAGES.MatchPlayers) {
    return <Matching />;
  }

  if (gameState.stage === STAGES.SelectCard) {
    return <CardSelector />;
  }

  return (
    <div className={clsnm(styles.container, styles.wrapper)}>
      <div className={styles.game}>
        <Base position="top" />
        <div className={styles.boardWrapper}>
          <Board />
        </div>
        <Base position="bottom" />
      </div>
      {layout === LAYOUT.expanded && (
        <div className={clsnm(styles.cards)}>
          <div className={styles.card}>
            <Card />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
