import { ReactComponent as EcosystemImage } from "assets/images/landing/ecosystem.svg";
import styles from "./Ecosystem.module.scss";

function Ecosystem() {
  return (
    <div className={styles.container}>
      <EcosystemImage />
      <div className={styles.content}>
        <h1>A growing NFT ecosystem.</h1>
        <p>
          SuperFarm empowers NFT creators, collectors and traders to participate
          in an NFT marketplace that is open and accessible to all.
        </p>
      </div>
    </div>
  );
}

export default Ecosystem;
