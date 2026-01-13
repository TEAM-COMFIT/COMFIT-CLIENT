import { useState } from "react";

import {
  Button,
  KakaoButton,
  BookmarkButton,
  CompanyLinkButton,
  ExpToggleButton,
  CompanyAnalysisButton,
  IconOnlyButton,
} from "@/shared/ui/button";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isExpChecked, setIsExpChecked] = useState(false);
  const [isTrashToggled, setIsTrashToggled] = useState(false);

  return (
    <>
      <div className={appContainer}>
        <h1>프리텐다드</h1>
        <p>카카오로 시작하기</p>
        <img src={KERORO} alt="Keroro" width={400} />
        <Heart aria-label="좋아요" />
      </div>

      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* 1. 카카오 버튼 */}
        <section>
          <h3>1. 카카오 버튼</h3>
          <KakaoButton />
        </section>

        {/* 2. 기본 버튼 Type */}
        <section>
          <h3>2. 기본 버튼 Type</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="primary" size="full">
              매칭 경험 목록 탭 바로가기
            </Button>
          </div>
        </section>

        {/* 3. 기업 분석 */}
        <section>
          <h3>3. 기업 분석</h3>
          <CompanyAnalysisButton />
        </section>

        {/* 4. 기능 버튼 (small + Icon) */}
        <section>
          <h3>4. 기능 버튼 (small + Icon)</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <BookmarkButton
              isToggled={isBookmarked}
              onClick={() => setIsBookmarked((prev) => !prev)}
            />

            <CompanyLinkButton
              isToggled={isLinkActive}
              onClick={() => setIsLinkActive((prev) => !prev)}
            />
          </div>
        </section>

        {/* 5. 상태 변경 */}
        <section>
          <h3>5. 상태 변경</h3>
          <ExpToggleButton
            isToggled={isExpChecked}
            onClick={() => setIsExpChecked((prev) => !prev)}
          />
        </section>

        {/* 6. 아이콘만 (Icon Only) */}
        <section>
          <h3>6. 아이콘만 (Icon Only)</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconOnlyButton
              aria-label="삭제"
              isToggled={isTrashToggled}
              onClick={() => setIsTrashToggled((prev) => !prev)}
            />
          </div>
        </section>

        {/* 7. 비활성화 (Disabled) */}
        <section>
          <h3>7. 비활성화 (Disabled)</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button variant="primary" size="large" disabled>
              패션/뷰티/라이프스타일
            </Button>
            <Button variant="secondary" size="large" disabled>
              모빌리티/트레블/O2O
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export { HomePage };
