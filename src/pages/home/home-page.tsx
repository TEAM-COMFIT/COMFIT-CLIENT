import { Button } from "@/shared/ui/button/button";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

export const HomePage = () => {
  const sectionHeaderStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const labelStyle = {
    minWidth: "80px",
    fontWeight: "bold",
    color: "#666",
  };

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
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Size & State</h1>

        {/* Primary Section */}
        <section
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h2 style={sectionHeaderStyle}>Primary</h2>

          <div style={rowStyle}>
            <span style={labelStyle}>Default</span>
            <Button variant="primary" size="full">
              매칭 경험 목록 탭 바로가기
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
            <Button variant="primary" size="medium">
              선택 완료
            </Button>
            <Button variant="primary" size="small">
              Small
            </Button>
          </div>

          <div style={rowStyle}>
            <span style={labelStyle}>Disabled</span>
            <Button variant="primary" size="full" disabled>
              Full
            </Button>
            <Button variant="primary" size="large" disabled>
              패션/뷰티/라이프스타일
            </Button>
            <Button variant="primary" size="medium" disabled>
              Medium
            </Button>
            <Button variant="primary" size="small" disabled>
              수정하기
            </Button>
          </div>
        </section>

        <hr
          style={{ border: "0", borderTop: "1px solid #eee", width: "100%" }}
        />

        {/* Secondary Section */}
        <section
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h2 style={sectionHeaderStyle}>Secondary</h2>

          <div style={rowStyle}>
            <span style={labelStyle}>Default</span>
            <Button variant="secondary" size="full">
              Full
            </Button>
            <Button variant="secondary" size="large">
              Large
            </Button>
            <Button variant="secondary" size="medium">
              Medium
            </Button>
            <Button variant="secondary" size="small">
              Small
            </Button>
          </div>

          <div style={rowStyle}>
            <span style={labelStyle}>Disabled</span>
            <Button variant="secondary" size="full" disabled>
              Full
            </Button>
            <Button variant="secondary" size="large" disabled>
              Large
            </Button>
            <Button variant="secondary" size="medium" disabled>
              Medium
            </Button>
            <Button variant="secondary" size="small" disabled>
              Small
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
