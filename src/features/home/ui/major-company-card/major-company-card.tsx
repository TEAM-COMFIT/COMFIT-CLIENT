import { useNavigate } from "react-router-dom";

import { IconMove } from "@/shared/assets/icons";
import { Tag } from "@/shared/ui/tag/tag";

import * as styles from "./major-company-card.css";

export type MajorCompanyCardType = "medium" | "large";

interface MajorCompanyCardProps {
  id: number | string;
  companyName: string;
  industry: string;
  type?: MajorCompanyCardType;
  backgroundImageUrl: string;
}

const MajorCompanyCard = ({
  id,
  companyName,
  industry,
  type = "medium",
  backgroundImageUrl,
}: MajorCompanyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/company/${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.card({ type })}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.content({ type })}>
        <span className={styles.title({ type })}>{companyName}</span>
        <Tag>{industry}</Tag>
      </div>

      {type === "large" && <IconMove className={styles.detailIcon} />}
    </button>
  );
};

export { MajorCompanyCard };
