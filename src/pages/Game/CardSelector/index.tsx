import styles from "./CardSelector.module.scss";
import { clsnm } from "utils/clsnm";
import Card1 from "assets/cards/card1.png";
import Card2 from "assets/cards/card2.png";

function CardSelector() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles["added-cards--container"]}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}

export default CardSelector;
