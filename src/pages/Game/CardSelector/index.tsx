import styles from "./CardSelector.module.scss";
import { clsnm } from "utils/clsnm";
import Card1 from "assets/cards/card1.png";
import Card2 from "assets/cards/card2.png";
import Typography from "components/Typography";
import CardWrapper from "components/CardWrapper";
import { Children } from "react";
import Button from "components/Button";

function CardSelector() {
  return (
    <div className={styles.wrapper}>
      <Typography variant="title1" weight="semibold">
        Customize your deck
      </Typography>
      <div className={styles.cards}>
        <CardWrapper className={styles.cardWrapper}>
          <div className={styles.button}>
            <Button>-</Button>
            <Typography variant="title4" weight="semibold">
              0
            </Typography>
            <Button>+</Button>
          </div>
        </CardWrapper>
        <CardWrapper className={styles.cardWrapper}>
          <div className={styles.button}>
            <Button>-</Button>
            <Typography variant="title4" weight="semibold">
              0
            </Typography>
            <Button>+</Button>
          </div>
        </CardWrapper>
        <CardWrapper className={styles.cardWrapper}>
          <div className={styles.button}>
            <Button>-</Button>
            <Typography variant="title4" weight="semibold">
              0
            </Typography>
            <Button>+</Button>
          </div>
        </CardWrapper>
        <CardWrapper className={styles.cardWrapper}>
          <div className={styles.button}>
            <Button>-</Button>
            <Typography variant="title4" weight="semibold">
              0
            </Typography>
            <Button>+</Button>
          </div>
        </CardWrapper>
        <CardWrapper className={styles.cardWrapper}>
          <div className={styles.button}>
            <Button>-</Button>
            <Typography variant="title4" weight="semibold">
              0
            </Typography>
            <Button>+</Button>
          </div>
        </CardWrapper>{" "}
      </div>
    </div>
  );
}

export default CardSelector;
