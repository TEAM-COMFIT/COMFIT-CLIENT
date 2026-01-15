import { useNavigate } from "react-router-dom";

import { DropdownArrow } from "@/shared/assets/icons";

import * as styles from "./matching-item.css";

import type { ButtonHTMLAttributes } from "react";

interface MatchingItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  matchingId: number;
  companyName: string;
  date: string;
  title: string;
}

export const MatchingItem = ({
  matchingId,
  companyName,
  date,
  title,
  ...props
}: MatchingItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/matching/${matchingId}`);
  };
  return (
    <button
      type="button"
      className={styles.container}
      {...props}
      aria-label={`${companyName} ${date} ${title}`}
      onClick={handleClick}
    >
      <div className={styles.left}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.meta}>
          {date} | {title}
        </div>
      </div>

      <DropdownArrow className={styles.icon} />
    </button>
  );
};
