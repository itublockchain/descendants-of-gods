import React, { MouseEventHandler, ReactNode } from "react";

import Typography from "components/Typography";
import { clsnm } from "utils/clsnm";
import styles from "./Button.module.scss";

type ButtonProps = {
    onClick: MouseEventHandler;
    className?: string;
    children: ReactNode;
    size?: "small" | "medium" | "large" | "xlarge";
    type?: "primary" | "secondary";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            onClick,
            className,
            children,
            size = "medium",
            type = "primary",
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
                    className
                )}
                onClick={onClick}
                {...props}
            >
                <Typography variant={variant} weight="medium">
                    {children}
                </Typography>
            </button>
        );
    }
);

export default Button;
