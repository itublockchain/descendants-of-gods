// @ts-ignore
import styles from "./Onboarding.module.scss";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "store/reducers/accounts";

function Onboarding() {

    const accountState = useSelector((state) => state.account);

    const dispatch = useDispatch();

    const requestAccount = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            dispatch(signIn());
        } catch (error) {
            console.error(error);
        }
    };

    return (<div className={styles.container}>
        <Button 
            onClick={() => requestAccount()}
            size="xlarge"
            type="secondary"
        >Sign in</Button>
        </div>);
}

export default Onboarding;
