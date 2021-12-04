import React, { Fragment, useEffect, useState } from "react";

import Card from "components/Card";
import Header from "components/Header";
import { Sort } from "pages/Marketplace/Sort";
import styles from "./Marketplace.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Marketplace = () => {
  const { MarketplaceContract } = useSelector(
    (state: RootState) => state.contracts
  );
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!MarketplaceContract) return;
    async function fetchData() {
      const res = await MarketplaceContract.getAllListings();
      console.log("Marketplace items:", res);
      setListings(res);
    }
    fetchData();
  }, [MarketplaceContract]);

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Sort />
        <div className={styles.cards}>
          {listings.map((item) => {
            return <Card />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Marketplace;
