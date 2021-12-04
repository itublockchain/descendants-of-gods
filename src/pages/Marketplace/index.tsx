import React, { Fragment, useEffect, useState } from "react";

import Card from "components/Card";
import Header from "components/Header";
import { Sort } from "pages/Marketplace/Sort";
import styles from "./Marketplace.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CardWrapper from "components/CardWrapper";
import { CARD, CARDTYPES } from "store/reducers/cards";
import Button from "components/Button";

const Marketplace = () => {
  const { MarketplaceContract } = useSelector(
    (state: RootState) => state.contracts
  );
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!MarketplaceContract) return;
    // asset === 0 => arena
    // asset === 1 => card

    // token === 0 => sons
    // token === 1 => biLira
    async function fetchData() {
      try {
        const res = await MarketplaceContract.getAllListings().then(
          (res: any) => {
            return res.map((item: any) => ({
              ...item,
              assetId: item.assetId.toNumber()
            }));
          }
        );
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
          {listings.map((item: any, index) => {
            return (
              <div key={index}>
                <CardWrapper
                  className={styles.cardWrapper}
                  index={item.assetId}
                />
                <h2>
                  {CARD[item.assetId as "0" | "1" | "2" | "3" | "4"]?.name}
                </h2>
                <Button size="medium">BUY</Button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Marketplace;
