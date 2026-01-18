import { IconLinkDefault } from "@/shared/assets/icons";

import * as styles from "./company-link-button.css";

import type { AnchorHTMLAttributes } from "react";

export interface CompanyLinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label?: string;
  children?: never;
}

const CompanyLinkButton = ({
  href,
  label = "기업 홈페이지",
  className,
  target = "_blank",
  rel,
  ...props
}: CompanyLinkButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel ?? "noopener noreferrer"}
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <IconLinkDefault className={styles.iconBase} />
      </span>
      <span className={styles.text}>{label}</span>
    </a>
  );
};

export { CompanyLinkButton };
