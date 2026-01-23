import { useEffect, useState } from "react";

import { CAT_SPINNER } from "@/shared/assets/gifs";
import { Alert } from "@/shared/ui/alert";
import { useCreateReport } from "@features/experience-matching/index";

import { useReportStore } from "../../store/report.store";

import * as styles from "./analyzing.css";

import type { CustomErrorResponse } from "@/shared/api/generate/http-client";

export const Analyzing = ({ nextStep }: { nextStep: () => void }) => {
  const { company, experience, jobDescription, setReportId } = useReportStore();
  const { mutate } = useCreateReport();

  // 에러 핸들링 (임시)
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    mutate(
      {
        companyId: company?.id ?? 0,
        experienceId: experience?.id ?? 0,
        jobDescription: jobDescription,
      },
      {
        onSuccess: (response) => {
          setReportId(response?.id ?? 0);
          nextStep();
        },
        onError: (error: CustomErrorResponse) => {
          const serverMessage =
            error.message || "리포트 생성 중 에러가 발생했습니다";
          setErrorMsg(serverMessage);
          setOpen(true);

          setTimeout(() => setOpen(false), 3000);
        },
      }
    );
  }, [nextStep, setReportId, mutate]);

  return (
    <>
      <div className={styles.layout}>
        <img className={styles.spinner} src={CAT_SPINNER} alt="로딩 스피너" />
        <div className={styles.titleBox}>
          <div className={styles.title}>기업과 나의 경험을 분석하고 있어요</div>
          <div className={styles.subTitle}>평균 15~30초 소요됩니다</div>
        </div>
      </div>
      {open && (
        <Alert
          variant="error"
          title="Error"
          description={errorMsg}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
