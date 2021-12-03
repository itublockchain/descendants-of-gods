import styles from "./AreaSelector.module.scss";
import SmallImage from "assets/images/area-selector/small-map.png";

function AreaSelector({ setAreaSelected }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles["map-container"]}>
        <img
          src={SmallImage}
          className={styles["small-map"]}
          onClick={() => setAreaSelected(true)}
        />
      </div>
    </div>
  );
}

export default AreaSelector;
