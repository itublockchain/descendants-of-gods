import styles from "./CardSelector.module.scss";
import Card from "components/Card";

function CardSelector() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}

export default CardSelector;
