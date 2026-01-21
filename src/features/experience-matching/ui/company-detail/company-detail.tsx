import { useState } from "react";

import { IconJob } from "@/shared/assets/icons";
import { Button, Tooltip } from "@/shared/ui";
import { Textfield } from "@/shared/ui/textfield";
import { GUIDE_TOOLTIP_CONTENT } from "@/shared/ui/tooltip/tooltip.content";

import { FIELD_CONFIG } from "../../config/matching";
import { useReportStore } from "../../store/report.store";

import * as styles from "./company-detail.css";

import type { CompanyInfo } from "../../type";

export const CompanyDetail = ({ nextStep }: { nextStep: () => void }) => {
  const setJobDescription = useReportStore((state) => state.setJobDescription);
  const jobDescription = useReportStore((state) => state.jobDescription);

  const [JDText, setJDText] = useState(jobDescription);

  // TODO: 서버에서 실제로 받아올 데이터
  const companyData: CompanyInfo = {
    name: "CJ ENM",
    industry: "#콘텐츠/미디어/엔터",
    recruitUrl: "https://recruit.cjenm.com",
    companyUrl: "https://www.cjenm.com",
    logo: "image_url_here",
  };

  const handleJD = () => {
    setJobDescription(JDText);
    nextStep();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.formWrapper}>
        {/** 기업 정보 */}
        <div className={styles.descriptionForm}>
          {FIELD_CONFIG.map(({ label, key }) => (
            <div key={key} className={styles.fieldWrapper}>
              <label className={styles.fieldTitle}>{label}</label>
              <div className={styles.fieldContent}>{companyData[key]}</div>
            </div>
          ))}
        </div>
        {/** JD */}
        <div className={styles.jdForm}>
          <div className={styles.jdTitle}>
            <label className={styles.fieldTitle}>
              <IconJob />
              <span>직무 설명(Job Description)</span>
            </label>
            <Tooltip type="guide" label="도움말">
              {GUIDE_TOOLTIP_CONTENT}
            </Tooltip>
          </div>
          <Textfield
            type="jobDescription"
            mode="edit"
            value={JDText}
            onChange={(e) => setJDText(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button onClick={handleJD} disabled={!JDText.trim()}>
          다음단계
        </Button>
      </div>
    </div>
  );
};
