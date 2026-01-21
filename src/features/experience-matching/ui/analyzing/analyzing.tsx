import { useEffect } from "react";

import { LOADING } from "@/shared/assets/images";

import { useCreateReport } from "../../api/use-create-report.mutation";
import { useReportStore } from "../../store/report.store";

import * as styles from "./analyzing.css";

export const Analyzing = ({ nextStep }: { nextStep: () => void }) => {
  const { company, experience, jobDescription, setReportId } = useReportStore();
  const { mutate } = useCreateReport({
    companyId: company?.id ?? 0,
    experienceId: experience?.id ?? 0,
    jobDescription: jobDescription,
  });

  useEffect(() => {
    mutate(undefined, {
      onSuccess: (response) => {
        setReportId(response?.id ?? 0);
        nextStep();
      },
    });
  }, [nextStep, setReportId, mutate]);

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
