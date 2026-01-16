import { useNavigate } from "react-router-dom";

import { DropdownArrow } from "@/shared/assets/icons";

import * as styles from "./matching-item.css";

import type { ButtonHTMLAttributes } from "react";

interface MatchingItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  matchingId: number;
  companyName: string;
  createdAt: string;
  title: string;
}

export const MatchingItem = ({
  matchingId,
  companyName,
  createdAt,
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
      aria-label={`${companyName} ${createdAt} ${title}`}
      onClick={handleClick}
    >
      <div className={styles.left}>
        <span className={styles.companyName}>{companyName}</span>
        <p className={styles.meta}>
          {createdAt} | {title}
        </p>
      </div>

      <DropdownArrow className={styles.icon} />
    </button>
  );
};
