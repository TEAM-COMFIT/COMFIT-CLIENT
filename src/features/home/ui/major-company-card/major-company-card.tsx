import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useNavigate } from "react-router-dom";

import { IconMove } from "@/shared/assets/icons";
import { getScaleLabel } from "@/shared/config";
import { Tag } from "@/shared/ui/tag/tag";

import * as styles from "./major-company-card.css";

import type { ScaleCode } from "@/shared/config";

type MajorCompanyCardType = "medium" | "large";

interface MajorCompanyCardProps {
  id: number;
  companyName: string;
  scale: ScaleCode;
  type?: MajorCompanyCardType;
  imgUrl: string;
}

const MajorCompanyCard = ({
  id,
  companyName,
  scale,
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
      <span className={styles.content({ type })}>
        <span className={styles.title({ type })}>{companyName}</span>
        <Tag>#{getScaleLabel(scale)}</Tag>
      </span>

      {type === "large" && <IconMove className={styles.detailIcon} />}
    </button>
  );
};

export { MajorCompanyCard };
