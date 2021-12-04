// @ts-ignore
import styles from "./Onboarding.module.scss";
import Button from "components/Button";
import useRequestAccounts from "hooks/useRequestAccounts";

function Onboarding() {
  const { requestAccounts }: any = useRequestAccounts();

  return (
    <div className={styles.container}>
      <Button
        onClick={async () => await requestAccounts()}
        size="xlarge"
        type="secondary"
      >
        Sign in
      </Button>
    </div>
  );
}

export default Onboarding;
