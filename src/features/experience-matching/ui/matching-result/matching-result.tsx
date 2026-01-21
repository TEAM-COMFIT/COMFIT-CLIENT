import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useAuthStore } from "@/app/store";
import { formatMatchingDetail } from "@/features/matching-detail/lib";
import { useGetProfile } from "@/features/my-page";
import { IconCopy, IconCheckOn } from "@/shared/assets/icons";
import { Button } from "@/shared/ui";

import { useGetAiReport } from "../../api/use-get-aiReport.query";
import { useReportStore } from "../../store/report.store";

import { MatchingResultContent } from "./matching-result-content/matching-result-content";
import * as styles from "./matching-result.css";

import type { CompanyDetail } from "@/pages/matching-detail/detail-section/detail-section";

export const MatchingResult = () => {
  const navigate = useNavigate();
  const reportId = useReportStore((state) => state.reportId);
  const [isCopied, setIsCopied] = useState(false);
  const { isLoggedIn } = useAuthStore();
  const { data } = useGetProfile({ enabled: isLoggedIn });

  const { data: report } = useGetAiReport(reportId);

  const handleCopyClick = async (data: typeof report) => {
    try {
      const formattedText = formatMatchingDetail(data as CompanyDetail);
      await navigator.clipboard.writeText(formattedText);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("복사 실패:", err);
      alert("복사 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.contentContainer}>
        <h1 className={styles.title}>
          {report?.companyName} 기업 맞춤 경험 매칭 X 자소서 작성 가이드
        </h1>
        <p className={styles.description}>
          {data?.name || "알수없음"}님의 경험은 기업과 아래와 같이 연결할 수
          있어요
        </p>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.copyButton}
            onClick={() => handleCopyClick(report)}
          >
            {isCopied ? (
              <>
                <span>복사완료</span>
                <IconCheckOn />
              </>
            ) : (
              <>
                <span>전체복사</span>
                <IconCopy />
              </>
            )}
          </button>
        </div>

        {/* 서버에서 받아온 데이터를 객체 전달 */}
        <MatchingResultContent data={report} />
        <div className={styles.footer}>
          <div className={styles.footerTitle}>
            <p className={styles.subTitle}>매칭 결과가 저장되었어요!</p>
            <p className={styles.mainTitle}>
              매칭 결과를 매칭 경험 목록 탭에서 확인하세요!
            </p>
          </div>
          <Button
            variant="primary"
            size="full"
            onClick={() => navigate(ROUTES.MATCHING_LIST)}
          >
            매칭 경험 목록 탭 바로가기
          </Button>
        </div>
      </main>
    </div>
  );
};
