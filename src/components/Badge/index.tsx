import { MouseEventHandler, ReactNode } from "react";
import Typography from "components/Typography";
import { clsnm } from "utils/clsnm";
import styles from "./Badge.module.scss";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

const Badge = ({ children, className, onClick }: BadgeProps) => {
  return (
    <div onClick={onClick} className={clsnm(styles.badge, className)}>
      <Typography variant="body2" weight="medium">
        {children}
      </Typography>
    </div>
  );
};

export default Badge;
