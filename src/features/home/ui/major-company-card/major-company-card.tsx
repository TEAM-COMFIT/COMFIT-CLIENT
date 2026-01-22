import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useNavigate } from "react-router-dom";

import {
  getCompanyDetail,
  getCompanySuggestions,
} from "@/features/company-detail";
import { queryClient } from "@/shared/api";
import { companyQueryKey } from "@/shared/api/config/query-key";
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

  const prefetchCompany = () => {
    void queryClient.prefetchQuery({
      queryKey: companyQueryKey.detail(id),
      queryFn: () => getCompanyDetail(id),
    });
    void queryClient.prefetchQuery({
      queryKey: companyQueryKey.suggestion(id),
      queryFn: () => getCompanySuggestions(id),
    });
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    prefetchCompany();
    navigate(`/company/${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={prefetchCompany}
      onFocus={prefetchCompany}
      onTouchStart={prefetchCompany}
      aria-label="旮办梾 ?侅劯搿??措彊"
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
