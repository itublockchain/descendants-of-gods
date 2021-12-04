import React from "react";
import { useDrop } from "react-dnd";
import { clsnm } from "utils/clsnm";
import styles from "./CardSelector.module.scss";

const Slot = () => {
  const [{ isOver, dropabble }, drop] = useDrop({
    accept: "1",
    drop: (item, monitor) => {
      //function
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropabble: !!monitor.canDrop()
    })
  });

  return (
    <div
      ref={drop}
      className={clsnm(styles.slot, isOver && styles.isOver)}
    ></div>
  );
};

export { Slot };
