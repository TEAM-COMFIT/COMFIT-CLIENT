import { useEffect } from "react";

import { LOADING } from "@/shared/assets/images";

import * as styles from "./analyzing.css";

export const Analyzing = ({ nextStep }: { nextStep: () => void }) => {
  // const data = { companyId: 1, experienceId: 1, jobDescription: "하이" }; // TODO: zustand에 저장된 값 가져오기

  // STEP 3에 들어오면 API 호출
  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO: AI 리포트 생성
      // console.log(data);
      nextStep();
    }, 3000);
    return () => clearTimeout(timer);
  }, [nextStep]);

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
