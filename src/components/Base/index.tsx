import Card from "components/Card";
import { ProfileInterface } from "common/constants/types";
import { clsnm } from "utils/clsnm";
import styles from "./Base.module.scss";

type BaseProps = {
  position: "top" | "bottom";
  player?: ProfileInterface;
};

const Base = ({ position, player }: BaseProps) => {
  const cardHoverable = position === "bottom";

  return (
    <div className={clsnm(styles.base, styles[position])}>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
      <div className={styles.card}>
        <Card rotate hoverable={cardHoverable} />
      </div>
    </div>
  );
};

export default Base;
