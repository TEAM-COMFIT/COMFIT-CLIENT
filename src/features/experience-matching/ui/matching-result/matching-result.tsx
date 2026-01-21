import { useState } from "react";

import { formatMatchingDetail } from "@/features/matching-detail/lib";
import { IconCopy, IconCheckOn } from "@/shared/assets/icons";

import {} from "./matching-result.css";
import { MatchingResultContent } from "./matching-result-content/matching-result-content";
import * as styles from "./matching-result.css";
import { MOCK_COMPANY_DETAIL } from "./mock-matching-detail";

export const MatchingResult = () => {
  const [isCopied, setIsCopied] = useState(false);
  // TODO: zustand 등에서 유저 정보 상태 관리 시 연결
  const username = "김컴피";

  // TODO: TanStack Query 등으로 실제 데이터 받아오는 방식으로 변경 필요
  // const {data} = useGetMatchingDetail();

  const handleCopyClick = async (data: typeof MOCK_COMPANY_DETAIL) => {
    try {
      const formattedText = formatMatchingDetail(data);
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
          {MOCK_COMPANY_DETAIL.companyName} 기업 맞춤 경험 매칭 X 자소서 작성
          가이드
        </h1>
        <p className={styles.description}>
          {username}님의 경험은 기업과 아래와 같이 연결할 수 있어요
        </p>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.copyButton}
            onClick={() => handleCopyClick(MOCK_COMPANY_DETAIL)}
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
        <MatchingResultContent data={MOCK_COMPANY_DETAIL} />
      </main>
    </div>
  );
};
