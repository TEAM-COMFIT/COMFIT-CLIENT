import { Button } from "@/shared/ui/button/Button";
const MyPage = () => {
  return (
    <div>
      <h1>Welcome to the My Page</h1>

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
          <h2>Primary</h2>

          <div>
            <span>Default</span>
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

          <div>
            <span>Disabled</span>
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
          <h2>Secondary</h2>

          <div>
            <span>Default</span>
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

          <div>
            <span>Disabled</span>
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
    </div>
  );
};

export { MyPage };
