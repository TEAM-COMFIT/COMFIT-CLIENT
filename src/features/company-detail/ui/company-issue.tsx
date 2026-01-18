import ArrowBlue from "@/shared/assets/icons/arrow_blue.svg?react";

import * as styles from "./company-issue.css";

import type { AnchorHTMLAttributes } from "react";

export interface CompanyIssueProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  date: string;
  title: string;
  description: string;
}

const CompanyIssue = ({
  href,
  date,
  title,
  description,
  className,
  target = "_blank",
  rel,
  ...props
}: CompanyIssueProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel ?? "noopener noreferrer"}
      className={[styles.container, className].filter(Boolean).join(" ")}
      aria-label={`${date} ${title} 새 탭에서 열기`}
      {...props}
    >
      <div className={styles.leftGroup}>
        <time className={styles.date}>{date}</time>

        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <span className={styles.iconWrapper} aria-hidden="true">
        <ArrowBlue className={styles.icon} />
      </span>
    </a>
  );
};

export { CompanyIssue };
