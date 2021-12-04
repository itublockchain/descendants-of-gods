// @ts-ignore
import React, { useRef, useState } from "react";
import styles from "./Matching.module.scss";
import Card1 from "assets/cards/card1.png";
import Card2 from "assets/cards/card2.png";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Typography from "components/Typography";
import Button from "components/Button";

function Matching({ setIsMatched }: any) {
  const hintRef: any = useRef();

  const { provider } = useSelector((state: RootState) => state.account);
  const { MatchMakerContract } = useSelector(
    (state: RootState) => state.contracts
  );

  useState(() => {
    const listener = () => {
      setIsMatched(true);
    };

    provider.on("GameStarted", listener);

    return () => {
      provider.off("GameStarted", listener);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={Card1} className={styles["first-image"]} />
        <img src={Card2} className={styles["second-image"]} />
        <Typography
          variant="title4"
          weight="medium"
          className={styles.hint}
          ref={hintRef}
        >
          Waiting another player to join
          <Button className={styles.button}>Leave the queue</Button>
        </Typography>
        <div className={styles["progress-bar--wrapper"]}>
          <div className={styles["progress-bar"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Matching;
