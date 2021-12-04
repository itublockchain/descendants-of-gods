import React, { MouseEventHandler, ReactNode } from "react";

import Typography from "components/Typography";
import { clsnm } from "utils/clsnm";
import styles from "./Button.module.scss";

type ButtonProps = {
  onClick?: MouseEventHandler;
  className?: string;
  children: ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
  type?: "primary" | "secondary";
  achilles?: boolean;
  loading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      className,
      children,
      size = "medium",
      type = "primary",
      achilles,
      loading,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const variant = ["small", "medium"].includes(size) ? "body2" : "body1";

    return (
      <button
        ref={ref}
        className={clsnm(
          styles.container,
          styles.button,
          styles[size],
          styles[type],
          loading ? styles.loading : "",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <Typography
          achilles={achilles}
          className={clsnm(styles.content, loading && styles.loading)}
          variant={variant}
          weight="medium"
        >
          {children}
        </Typography>
        <div className={styles.loadingIndicator}>{loading && "Sending..."}</div>
      </button>
    );
  }
);

export default Button;
