// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import styles from "./Matching.module.scss";
import Card1 from "assets/cards/Warrior.png";
import Card2 from "assets/cards/Archer.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import Typography from "components/Typography";
import Button from "components/Button";

function Matching({ setIsMatched }: any) {
  const hintRef: any = useRef();

  const { signer, address: signerAddress } = useSelector(
    (state: RootState) => state.account
  );

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
          <Button
            onClick={async () => null}
            size="large"
            className={styles.button}
          >
            Leave the queue
          </Button>
        </Typography>
        <div className={styles["progress-bar--wrapper"]}>
          <div className={styles["progress-bar"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Matching;
