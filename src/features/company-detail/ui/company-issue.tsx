import ArrowBlue from "@/shared/assets/icons/arrow_blue.svg?react";

import * as styles from "./company-issue.css";

import type { ButtonHTMLAttributes } from "react";

export interface CompanyIssueProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  date: string;
  title: string;
  description: string;
}

const CompanyIssue = ({
  date,
  title,
  description,
  ...props
}: CompanyIssueProps) => {
  return (
    <button
      type="button"
      className={styles.container}
      aria-label={`${date} ${title}`}
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
    </button>
  );
};

export { CompanyIssue };
