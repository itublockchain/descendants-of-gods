// @ts-ignore
import styles from "./Onboarding.module.scss";
import Button from "components/Button";
import { useSelector } from "react-redux";

function Onboarding() {

    const accountState = useSelector((state) => state.account);

    return (<div className={styles.container}>
        <Button 
            
            size="xlarge"
            type="secondary"
        >Sign in</Button>
        </div>);
}

export default Onboarding;
