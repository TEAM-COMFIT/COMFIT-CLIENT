import { useEffect } from "react";

import { useReportStore } from "@/app/store";
import { LOADING } from "@/shared/assets/images";

import * as styles from "./analyzing.css";

export const Analyzing = ({ nextStep }: { nextStep: () => void }) => {
  const { companyId, experienceId, jobDescription } = useReportStore();

  // 서버 리퀘스트 데이터
  const requestData = {
    companyId: companyId?.id,
    experienceId: experienceId?.id,
    jobDescription: jobDescription,
  };

  // STEP 3에 들어오면 API 호출
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(requestData);
      nextStep();
    }, 3000);
    return () => clearTimeout(timer);
  }, [nextStep, requestData]);

  return (
    <div className={styles.layout}>
      <img className={styles.spinner} src={LOADING} alt="로딩 스피너" />
      <div className={styles.titleBox}>
        <div className={styles.title}>기업과 나의 경험을 분석하고 있어요</div>
        <div className={styles.subTitle}>평균 15~30초 소요됩니다</div>
      </div>
    </div>
  );
};
