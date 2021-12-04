import styles from "./CardWrapper.module.scss";
import Card1 from "assets/cards/card1.png";
import { ReactNode } from "react";
import { clsnm } from "utils/clsnm";

type CardWrapperProps = {
  card?: any;
  children?: ReactNode;
  className?: string;
};

const CardWrapper = ({ card, children, className }: CardWrapperProps) => {
  return (
    <div className={clsnm(styles.wrapper, className)}>
      <div
        style={{ backgroundImage: `url(${Card1}` }}
        className={styles.image}
      ></div>
      <div className={styles.meta}>{children}</div>
    </div>
  );
};

export default CardWrapper;
