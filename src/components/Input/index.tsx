import React, {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithoutRef,
  ReactNode
} from "react";

import Icon from "components/Icon";
import { clsnm } from "utils/clsnm";
import styles from "./Input.module.scss";

interface InputProps {
  onChange: ChangeEventHandler;
  value: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  className?: string;
  containerClassname?: string;
  props?: PropsWithoutRef<HTMLDivElement>;
  icon?: ReactNode;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      value,
      inputProps,
      containerClassname,
      className,
      icon,
      placeholder = "Enter value",
      ...props
    }: InputProps,
    ref
  ) => {
    return (
      <div className={clsnm(styles.container, containerClassname)} {...props}>
        {icon && (
          <Icon size={24} className={styles.icon}>
            {icon}
          </Icon>
        )}
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsnm(styles.input, icon && styles.inputicon, className)}
          {...inputProps}
        />
      </div>
    );
  }
);

export default Input;
