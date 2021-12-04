import styles from "./CardSelector.module.scss";
import Typography from "components/Typography";
import Card from "components/Card";
import { Slot } from "pages/Game/CardSelector/Slot";

function CardSelector() {
  return (
    <div className={styles.wrapper}>
      <Typography variant="title1" weight="semibold">
        Customize your deck
      </Typography>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
          <Card className={styles.eachCard} draggable />
        </div>
      </div>

      <div className={styles.slots}>
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
      </div>
    </div>
  );
}

export default CardSelector;
