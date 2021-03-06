import Button from "components/Button";
import { ReactComponent as ConnectIcon } from "assets/icons/basic/credit_card.svg";
import { ReactComponent as UserIcon } from "assets/icons/user/user_circle.svg";
import Icon from "components/Icon";
import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";
import useRequestAccounts from "hooks/useRequestAccounts";
import { Link } from "react-router-dom";
import Typography from "components/Typography";
import Image from "assets/images/landing/logo.png";
import { useLocation } from "react-router";
import { STAGES } from "store/reducers/game";

const Header = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  let navigate = useNavigate();
  const { signedIn, address } = useSelector(
    (state: RootState) => state.account
  );
  const { stage } = useSelector((state: RootState) => state.game);
  const { pathname } = useLocation();
  const length = address?.length;

  const { requestAccounts }: any = useRequestAccounts();

  /**
   * @brief Navbar background color transition
   */
  React.useEffect(() => {
    const el = ref?.current;
    const onScroll = (e: any) => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        el?.classList.add(styles.scrolled);
      } else {
        el?.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img src={Image} className={styles.logoImage} />
        </Link>
        {!pathname?.includes("game") && (
          <div className={styles.links}>
            <Link className={styles.link} to="/market">
              <Typography variant="body1" weight="medium">
                Marketplace
              </Typography>
            </Link>
          </div>
        )}
      </div>
      {pathname.includes("game") && stage === STAGES.InGame && (
        <div className={styles.menu}>
          <Button>Loan</Button>
        </div>
      )}
      {!pathname.includes("game") && (
        <div className={styles.menu}>
          {signedIn === false ? (
            <Button
              onClick={async () => await requestAccounts()}
              className={styles.connect}
            >
              <Icon>
                <ConnectIcon />
              </Icon>
            </Button>
          ) : (
            <Button onClick={() => null} className={styles.connect}>
              <Icon className={styles.icon}>
                <UserIcon />
              </Icon>
              <span>
                {address?.substring(0, 5)}...
                {address?.substring(length - 5, length)}
              </span>
            </Button>
          )}
          <Button onClick={() => navigate("/game")} type="secondary">
            Launch Game
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
