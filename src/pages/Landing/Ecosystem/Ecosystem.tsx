import EcosystemImage from "assets/images/landing/cards.png";
import styles from "./Ecosystem.module.scss";

function Ecosystem() {
  return (
    <div className={styles.container}>
      <img className={styles.maxWidth} src={EcosystemImage} alt="" />
      <div className={styles.content}></div>
    </div>
  );
}

export default Ecosystem;
