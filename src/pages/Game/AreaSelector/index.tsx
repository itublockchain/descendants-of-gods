import styles from "./AreaSelector.module.scss";
import SmallImage from "assets/images/area-selector/small-map.png";
import MapCropped from "assets/images/area-selector/map-cropped.png";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type AreaSelectorProps = {
  setAreaSelected: Dispatch<SetStateAction<boolean>>;
  areaSelected: boolean;
};

function AreaSelector({ areaSelected, setAreaSelected }: AreaSelectorProps) {
  //const [board, setBoard] = useState<boolean | null>(false);
  const ref = useRef<HTMLImageElement>(null);

  const handleAnimation = () => {
    const el = ref?.current;

    if (el) {
      if (Array.from(el.classList).includes?.(styles.animation)) {
        el.classList.remove(styles.animation);
      } else {
        el.classList.add(styles.animation);
      }
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleAnimation();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles["map-container"]}>
        <img alt="" className={styles.mapCropped} src={MapCropped} />
        <img
          alt=""
          ref={ref}
          src={SmallImage}
          className={styles["small-map"]}
          onClick={handleAnimation}
        />
      </div>
    </div>
  );
}

export default AreaSelector;
