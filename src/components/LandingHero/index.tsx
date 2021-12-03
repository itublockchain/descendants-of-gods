import Button from "components/Button";
import Modal from "components/Modal";
import React from "react";
import styles from "./LandingHero.module.scss";
import { useNavigate } from "react-router";

const LandingHero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let navigate = useNavigate();

  return (
    <div className={styles["hero-container"]}>
      <h1>NFTs thrive here.</h1>
      <p>
        SuperFarm is a passionate community building at the intersection of NFTs
        and DeFi.
      </p>
      <Button onClick={() => navigate("/game")} type="secondary" size="large">
        Launch Game
      </Button>
    </div>
  );
};

export default LandingHero;
