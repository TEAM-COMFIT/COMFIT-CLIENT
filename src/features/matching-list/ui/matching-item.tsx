import { DropdownArrow } from "@/shared/assets/icons";

import * as styles from "./matching-item.css";

type MatchingItemProps = {
  companyName: string;
  date: string;
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MatchingItem = ({
  companyName,
  date,
  title,
  className,
  ...props
}: MatchingItemProps) => {
  return (
    <button
      type="button"
      className={[styles.container, className].filter(Boolean).join(" ")}
      {...props}
      aria-label={`${companyName} ${date} ${title}`}
    >
      <div className={styles.left}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.meta}>
          {date} | {title}
        </div>
      </div>

      <DropdownArrow className={styles.right} />
    </button>
  );
};
