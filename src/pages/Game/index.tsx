import Base from "components/Base";
import Board from "components/Board";
import Card from "components/Card";
import { LAYOUT } from "common/constants/layout";
import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import styles from "./Game.module.scss";
import { useSelector } from "react-redux";

const Game = () => {
  const { layout } = useSelector((state: RootState) => state.game);

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
