import React from "react";
import Snowfall from "react-snowfall";
import styles from "./SnowFall.module.scss";

const SnowFall = () => {
  return (
    <div className={styles.snowFall}>
      <Snowfall />
    </div>
  );
};

export default SnowFall;
