import {
  MouseEventHandler,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement
} from "react";

import React from "react";
import { clsnm } from "utils/clsnm";
import styles from "./Icon.module.scss";

type IconProps = {
  size?: number;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = 20, className, children, onClick }: IconProps, ref) => {
    const childrenWithProps = () => {
      if (isValidElement(children)) {
        return cloneElement(children, {
          width: size,
          height: size
        });
      }
      return children;
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsnm(styles.icon, className)}
      >
        {childrenWithProps?.()}
      </div>
    );
  }
);

export default Icon;
