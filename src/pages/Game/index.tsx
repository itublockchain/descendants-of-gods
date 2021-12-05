// @ts-ignore
import Base from "components/Base";
import Board from "components/Board";
import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import styles from "./Game.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Onboarding from "pages/Game/Onboarding";
import { useEffect, useState } from "react";
import AreaSelector from "pages/Game/AreaSelector";
import Matching from "./Matching";
import CardSelector from "./CardSelector";
import {
  setCell,
  setEnemyCards,
  setOrder,
  STAGES,
  updateCell
} from "store/reducers/game";
import Header from "components/Header";

declare const window: Window & any;

const Game = () => {
  const accountState = useSelector((state: RootState) => state.account);
  const { layout, moveStack, ...gameState } = useSelector(
    (state: RootState) => state.game
  );
  const { ClashContract } = useSelector((state: RootState) => state.contracts);
  const dispatch = useDispatch();
  useEffect(() => {
    window?.socket?.on("move", (msg: any) => {
      dispatch(setCell(msg.table));
      dispatch(setOrder(msg.order));
    });
  }, [window.socket]);

  useEffect(() => {
    if (!ClashContract) return;

    async function fetchData() {
      const res = await ClashContract.getEnemyDeck();
      console.log("enemy cards:", res);
      dispatch(setEnemyCards(res));
    }
    fetchData();
  }, [ClashContract]);

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
      <Header />
      <div className={styles.game}>
        <Base position="top" />
        <div className={styles.boardWrapper}>
          <Board />
        </div>
        <Base position="bottom" />
      </div>
    </div>
  );
};

export default Game;
