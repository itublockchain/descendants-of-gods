import styles from "./CardSelector.module.scss";
import Typography from "components/Typography";
import Card from "components/Card";
import { Slot } from "pages/Game/CardSelector/Slot";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect } from "react";

function CardSelector() {
  const { GodContract } = useSelector((state: RootState) => state.contracts);
  const { signer } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    if (!GodContract || !signer) return;

    async function fetchData() {
      const res = await GodContract.connect(signer).getBalances();
      const numbers = res.map((item: any) => {
        return item.toNumber();
      });
      console.log(numbers);
    }
    fetchData();
  }, [GodContract, signer]);

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
