import { useState } from "react";

import { IconJob } from "@/shared/assets/icons";
import { Button, Tooltip } from "@/shared/ui";
import { Textfield } from "@/shared/ui/textfield";
import { GUIDE_TOOLTIP_CONTENT } from "@/shared/ui/tooltip/tooltip.content";

import { useGetCompanyDetail } from "../../api/use-company-detail.query";
import { FIELD_CONFIG } from "../../config/matching";
import { useReportStore } from "../../store/report.store";

import * as styles from "./company-detail.css";

export const CompanyDetail = ({ nextStep }: { nextStep: () => void }) => {
  const company = useReportStore((state) => state.company);
  const { data } = useGetCompanyDetail(company?.id); // 기업 정보 조회 API
  const setJobDescription = useReportStore((state) => state.setJobDescription);
  const jobDescription = useReportStore((state) => state.jobDescription);

  const [JDText, setJDText] = useState(jobDescription);

  const handleJD = () => {
    setJobDescription(JDText);
    nextStep();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.formWrapper}>
        {/** 기업 정보 */}
        <div className={styles.descriptionForm}>
          {data &&
            FIELD_CONFIG.map(({ label, key, format, isLink }) => {
              const value = data[key];
              const displayValue = format
                ? format((value ?? "") as string)
                : value; // 보여줄 데이터 처리
              return (
                <div key={key} className={styles.fieldWrapper}>
                  <label className={styles.fieldTitle}>{label}</label>
                  <div className={styles.fieldContent}>
                    {/** https:// 링크 연결 */}
                    {isLink ? (
                      <a
                        href={value as string}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {displayValue}
                      </a>
                    ) : (
                      displayValue
                    )}
                  </div>
                </div>
              );
            })}
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
