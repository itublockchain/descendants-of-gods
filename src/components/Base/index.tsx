import Card from "components/Card";
import { ProfileInterface } from "common/constants/types";
import { clsnm } from "utils/clsnm";
import styles from "./Base.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { CARD } from "store/reducers/cards";

type BaseProps = {
  position: "top" | "bottom";
  player?: ProfileInterface;
};

const Base = ({ position, player }: BaseProps) => {
  const cardHoverable = position === "bottom";

  const { selectedCards } = useSelector((state: RootState) => state.game);

  return (
    <div className={clsnm(styles.base, styles[position])}>
      {position === "bottom" &&
        selectedCards.map((item: any) => {
          if (item === -1) {
            return <></>;
          }

          return (
            <div className={styles.card}>
              <Card
                index={item}
                type="bottom"
                rotate
                hoverable={cardHoverable}
                style={{
                  backgroundImage: `url(${
                    CARD[item as "0" | "1" | "2" | "3" | "4"]?.img
                  })`
                }}
              />
            </div>
          );
        })}
      {position === "top" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Base;
