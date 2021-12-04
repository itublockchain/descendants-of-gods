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
import { useState } from "react";
import AreaSelector from "./AreaSelector";

const Game = () => {
  const accountState = useSelector((state: RootState) => state.account);
  const { layout } = useSelector((state: RootState) => state.game);

  const [areaSelected, setAreaSelected] = useState(false);

  if (accountState.signedIn === null) {
    return null;
  }

  if (accountState.signedIn === false) {
    return <Onboarding />;
  }

  if (!areaSelected) {
    return (
      <AreaSelector
        areaSelected={areaSelected}
        setAreaSelected={setAreaSelected}
      />
    );
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
      {layout === LAYOUT.collapsed && (
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
