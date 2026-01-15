import IconLinkDefault from "@/shared/assets/icons/icon_link_default.svg?react";
import IconLinkHover from "@/shared/assets/icons/icon_link_hover.svg?react";

import * as styles from "./company-homepage-button.css";

import type { AnchorHTMLAttributes } from "react";

export interface CompanyHomepageButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label?: string;
  children?: never;
}

const CompanyHomepageButton = ({
  href,
  label = "기업 홈페이지",
  className,
  target = "_blank",
  rel,
  ...props
}: CompanyHomepageButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel ?? "noopener noreferrer"}
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <IconLinkDefault className={styles.defaultIcon} />
        <IconLinkHover className={styles.hoverIcon} />
      </span>
      <span className={styles.text}>{label}</span>
    </a>
  );
};

export { CompanyHomepageButton };
