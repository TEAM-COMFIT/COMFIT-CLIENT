import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useNavigate } from "react-router-dom";

import { IconMove } from "@/shared/assets/icons";
import { Tag } from "@/shared/ui/tag/tag";

import * as styles from "./major-company-card.css";

export type MajorCompanyCardType = "medium" | "large";

interface MajorCompanyCardProps {
  id: number;
  companyName: string;
  industry: string;
  type?: MajorCompanyCardType;
  imgUrl: string;
}

const MajorCompanyCard = ({
  id,
  companyName,
  industry,
  type = "medium",
  imgUrl,
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
      style={assignInlineVars({ [styles.bgImageUrl]: `url(${imgUrl})` })}
    >
      <div className={styles.content({ type })}>
        <span className={styles.title({ type })}>{companyName}</span>
        <Tag>#{industry}</Tag>
      </div>

      {type === "large" && <IconMove className={styles.detailIcon} />}
    </button>
  );
};

export { MajorCompanyCard };
