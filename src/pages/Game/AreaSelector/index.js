import styles from "./AreaSelector.module.scss";
import BigImage from "assets/images/area-selector/big-map.png";
import SmallImage from "assets/images/area-selector/small-map.png";

function AreaSelector() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["map-container"]}></div>
    </div>
  );
}

export default AreaSelector;
