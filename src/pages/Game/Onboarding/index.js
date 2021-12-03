// @ts-ignore
import styles from "./Onboarding.module.scss";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import requestAccounts from "utils/requestAccounts";

function Onboarding() {
    const dispatch = useDispatch()

    const accountState = useSelector((state) => state.account);

    return (<div className={styles.container}>
        <Button 
            onClick={() => requestAccounts(dispatch)}
            size="xlarge"
            type="secondary"
        >Sign in</Button>
        </div>);
}

export default Onboarding;
