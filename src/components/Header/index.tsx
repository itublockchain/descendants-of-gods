import Button from "components/Button";
import { ReactComponent as ConnectIcon } from "assets/icons/basic/credit_card.svg";
import Icon from "components/Icon";
import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import requestAccounts from "utils/requestAccounts";


const Header = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  let navigate = useNavigate();

  const account = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch();

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
      <div className={styles.logo}>Logo field</div>
      <div className={styles.menu}>
        {account.signedIn === false && 
          <Button onClick={() => requestAccounts(dispatch)} className={styles.connect}>
            <Icon>
              <ConnectIcon />
            </Icon>
          </Button>}
        <Button onClick={() => navigate("/game")} type="secondary">
          Launch Game
        </Button>
      </div>
    </header>
  );
};

export default Header;
