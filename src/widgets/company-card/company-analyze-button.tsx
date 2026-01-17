import { useNavigate } from "react-router-dom";

import { IconCompany } from "@/shared/assets/icons";

import * as styles from "./company-analyze-button.css";

interface CompanyAnalyzeButtonProps {
  companyId: number;
}

const CompanyAnalyzeButton = ({ companyId }: CompanyAnalyzeButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/company/${companyId}`);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <IconCompany className={styles.icon} />
      <span>기업 분석 보기</span>
    </button>
  );
};

export { CompanyAnalyzeButton };
