import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetAiReport } from "@/features/matching-detail/api/use-match";
import { formatMatchingDetail } from "@/features/matching-detail/lib";
import { useGetProfile } from "@/features/my-page";
import { IconCopy, IconCheckOn } from "@/shared/assets/icons";
import { useAuthStore } from "@/shared/model/store/auth.store";

import { DetailSection } from "./detail-section/detail-section";
import * as styles from "./matching-detail-page.css";

import type { matchingDetailType } from "@/features/matching-detail/types/matching-detail.type";

const MatchingDetailPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { id } = useParams<{ id: string }>();
  const idNum = Number(id);

  const { isLoggedIn } = useAuthStore();
  const { data } = useGetAiReport(idNum);
  const { data: profileData } = useGetProfile({ enabled: isLoggedIn });

  const handleCopyClick = async (data: matchingDetailType) => {
    if (!data) return;
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
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          {data?.companyName} 기업 맞춤 경험 매칭 X 자소서 작성 가이드
        </h1>
        <p className={styles.description}>
          {profileData?.name}님의 경험은 기업과 아래와 같이 연결할 수 있어요
        </p>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.copyButton}
            onClick={() => data && handleCopyClick(data)}
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
        <DetailSection detailData={data} />
      </div>
    </div>
  );
};

export { MatchingDetailPage };
