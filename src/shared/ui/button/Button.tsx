import { buttonSizes, buttonVariants } from "./button.css";

import type { ButtonSize, ButtonVariant } from "./button.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "style"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonVariants[variant]} ${buttonSizes[size]}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
