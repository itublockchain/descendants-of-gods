import styles from "./AreaSelector.module.scss";
import SmallImage from "assets/images/area-selector/small-map.png";
import MapCropped from "assets/images/area-selector/map-cropped.png";
import Greek1 from "assets/images/area-selector/part-1.png";
import Greek2 from "assets/images/area-selector/part-2.png";
import Greek3 from "assets/images/area-selector/part-3.png";
import Greek4 from "assets/images/area-selector/part-4.png";
import Greek5 from "assets/images/area-selector/part-5.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage, STAGES } from "store/reducers/game";
import { clsnm } from "utils/clsnm";
import { RootState } from "store";

function AreaSelector() {
  //const [board, setBoard] = useState<boolean | null>(false);
  const ref = useRef<HTMLImageElement>(null);
  const [citySelected, setCitySelected] = useState(false);
  let timer: any = null;

  const dispatch = useDispatch();

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

  const joinToCard = (id: number) => {
    if (id === 1) {
      dispatch(setStage(STAGES.SelectCard));
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
            <div className={styles["small-map--container"]}>
              <img
                onClick={() => {
                  joinToCard(1);
                }}
                className={clsnm(styles.greek, styles.greek1)}
                alt=""
                ref={ref}
                src={Greek1}
              />
              <img
                onClick={() => joinToCard(2)}
                className={clsnm(styles.greek, styles.greek2)}
                alt=""
                ref={ref}
                src={Greek2}
              />
              <img
                onClick={() => joinToCard(3)}
                className={clsnm(styles.greek, styles.greek3)}
                alt=""
                ref={ref}
                src={Greek3}
              />
              <img
                onClick={() => joinToCard(4)}
                className={clsnm(styles.greek, styles.greek4)}
                alt=""
                ref={ref}
                src={Greek4}
              />
              <img
                onClick={() => joinToCard(5)}
                className={clsnm(styles.greek, styles.greek5)}
                alt=""
                ref={ref}
                src={Greek5}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AreaSelector;
