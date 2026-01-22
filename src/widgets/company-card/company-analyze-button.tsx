import { useNavigate } from "react-router-dom";

import {
  getCompanyDetail,
  getCompanySuggestions,
} from "@/features/company-detail";
import { queryClient } from "@/shared/api";
import { companyQueryKey } from "@/shared/api/config/query-key";
import { IconCompany } from "@/shared/assets/icons";

import * as styles from "./company-analyze-button.css";

interface CompanyAnalyzeButtonProps {
  companyId: number;
}

const CompanyAnalyzeButton = ({ companyId }: CompanyAnalyzeButtonProps) => {
  const navigate = useNavigate();

  const prefetchCompany = () => {
    void queryClient.prefetchQuery({
      queryKey: companyQueryKey.detail(companyId),
      queryFn: () => getCompanyDetail(companyId),
    });
    void queryClient.prefetchQuery({
      queryKey: companyQueryKey.suggestion(companyId),
      queryFn: () => getCompanySuggestions(companyId),
    });
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    prefetchCompany();
    navigate(`/company/${companyId}`);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      onMouseEnter={prefetchCompany}
      onFocus={prefetchCompany}
      onTouchStart={prefetchCompany}
    >
      <IconCompany className={styles.icon} />
      <span>기업 분석 보기</span>
    </button>
  );
};

export { CompanyAnalyzeButton };
