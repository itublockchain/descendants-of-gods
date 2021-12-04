import React, { Fragment, useEffect, useState } from "react";

import Card from "components/Card";
import Header from "components/Header";
import { Sort } from "pages/Marketplace/Sort";
import styles from "./Marketplace.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CardWrapper from "components/CardWrapper";

const Marketplace = () => {
  const { MarketplaceContract } = useSelector(
    (state: RootState) => state.contracts
  );
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!MarketplaceContract) return;
    async function fetchData() {
      try {
        const res = await MarketplaceContract.getAllListings();
        setListings(res);
        console.log(res);
      } catch (err) {
        console.log({ err });
      }
    }
    fetchData();
  }, [MarketplaceContract]);

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Sort />
        <div className={styles.cards}>
          {listings.map((item, index) => {
            return (
              <Fragment>
                <CardWrapper className={styles.cardWrapper} key={index} />
                <CardWrapper className={styles.cardWrapper} key={index} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Marketplace;
