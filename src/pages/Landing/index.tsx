import Footer from "components/Footer";
import Header from "components/Header";
import LandingHero from "components/LandingHero";
import styles from "./Landing.module.scss";
import Ecosystem from "./Ecosystem/Ecosystem";

const Landing = () => {
  return (
    <div className={styles.container}>
      <Header />
      <LandingHero />
      <Ecosystem />
    </div>
  );
};

export default Landing;
