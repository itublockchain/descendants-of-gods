import React, { Fragment } from "react";

import Card from "components/Card";
import Header from "components/Header";
import { Sort } from "pages/Marketplace/Sort";
import styles from "./Marketplace.module.scss";

const Marketplace = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Sort />
        <div className={styles.cards}>
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
          <Card className={styles.card} />
        </div>
      </div>
    </Fragment>
  );
};

export default Marketplace;
