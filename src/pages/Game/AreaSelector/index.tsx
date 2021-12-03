import styles from "./AreaSelector.module.scss";
import SmallImage from "assets/images/area-selector/small-map.png";
import MapCropped from "assets/images/area-selector/map-cropped.png";
import { Dispatch, SetStateAction } from "react";

type AreaSelectorProps = {
  setAreaSelected: Dispatch<SetStateAction<boolean>>;
};

function AreaSelector({ setAreaSelected }: AreaSelectorProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles["map-container"]}>
        <img className={styles.mapCropped} src={MapCropped} />
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
