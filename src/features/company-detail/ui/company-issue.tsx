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
  const safeRel =
    target === "_blank"
      ? Array.from(
          new Set(["noopener", "noreferrer", ...(rel?.split(" ") ?? [])])
        ).join(" ")
      : rel;
  const dateTime = date.replace(/\./g, "-");
  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={[styles.container, className].filter(Boolean).join(" ")}
      aria-label={`${date} ${title}${target === "_blank" ? " 새 탭에서 열기" : ""}`}
      {...props}
    >
      <div className={styles.leftGroup}>
        <time className={styles.date} dateTime={dateTime}>
          {date}
        </time>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
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
