// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import styles from "./Matching.module.scss";
import Card1 from "assets/cards/Warrior.png";
import Card2 from "assets/cards/Archer.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import Typography from "components/Typography";
import Button from "components/Button";
import { setStage, STAGES } from "store/reducers/game";
import { setSonsContract } from "store/reducers/contracts";
import { useNavigate } from "react-router";

function Matching({ setIsMatched }: any) {
  const hintRef: any = useRef();

  const { signer } = useSelector((state: RootState) => state.account);
  const { MatchMakerContract } = useSelector(
    (state: RootState) => state.contracts
  );

  const dispatch = useDispatch();
  const leaveGame = async () => {
    await MatchMakerContract.connect(signer).leaveGame(1);
  };

  useEffect(() => {
    if (MatchMakerContract) {
      MatchMakerContract.on("WaitingLeave", () => {
        dispatch(setStage(STAGES.SelectMap));
      });
    }
    if (MatchMakerContract) {
      MatchMakerContract.on("GameStarted", () => {
        dispatch(setStage(STAGES.InGame));
      });
    }
  }, [MatchMakerContract]);

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
            onClick={async () => {
              await leaveGame();
            }}
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
