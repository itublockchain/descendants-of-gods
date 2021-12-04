import styles from "./AreaSelector.module.scss";
import SmallImage from "assets/images/area-selector/small-map.png";
import MapCropped from "assets/images/area-selector/map-cropped.png";
import Greek1 from "assets/images/area-selector/greek-1.png";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type AreaSelectorProps = {
  setAreaSelected: Dispatch<SetStateAction<boolean>>;
  areaSelected: boolean;
};

function AreaSelector({ areaSelected, setAreaSelected }: AreaSelectorProps) {
  //const [board, setBoard] = useState<boolean | null>(false);
  const ref = useRef<HTMLImageElement>(null);
  const [citySelected, setCitySelected] = useState(false);
  let timer: any = null;

  const handleAnimation = (escape?: boolean) => {
    const el = ref?.current;
    if (el) {
      if (Array.from(el.classList).includes?.(styles.animation) || escape) {
        el.classList.remove(styles.animation);
        setCitySelected(false);
        clearTimeout(timer);
      } else {
        el.classList.add(styles.animation);
        timer = setTimeout(() => {
          setCitySelected(true);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleAnimation(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const joinToBoard = (id: number) => {
    if (id === 1) {
      setAreaSelected(true);
      console.log("join to board");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["map-container"]}>
        <img alt="" className={styles.mapCropped} src={MapCropped} />
        {!citySelected ? (
          <img
            alt=""
            ref={ref}
            src={SmallImage}
            className={styles["small-map"]}
            onClick={() => handleAnimation(false)}
          />
        ) : (
          <div className={styles.smallMapWrapper}>
            <img
              onClick={() => joinToBoard(1)}
              className={styles.greek1}
              alt=""
              ref={ref}
              src={Greek1}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AreaSelector;
