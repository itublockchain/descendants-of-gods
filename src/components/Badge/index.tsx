import { ReactNode } from "react";
import Typography from "components/Typography";
import { clsnm } from "utils/clsnm";
import styles from "./Badge.module.scss";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div className={clsnm(styles.badge, className)}>
      <Typography variant="body2" weight="medium">
        {children}
      </Typography>
    </div>
  );
};

export default Badge;
