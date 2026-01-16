
import { useState } from "react";

import { Search } from "@/shared/ui/search";
import Heart from "@icons/heart.svg?react";
import { RefreshButton } from "@/widgets/refresh-button/refresh-button";

import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";
const HomePage = () => {
  const [value, setValue] = useState("");

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>

      {/* Search 공통 컴포넌트 임시 확인 영역 */}
      <div style={{ margin: "2.4rem 0" }}>
        <Search
          size="full"
          value={value}
          onChange={setValue}
          onSearch={(v: string) => console.log("search:", v)}
          placeholder="Search"
        />
      </div>

      {/* 사이즈별 확인 */}
      <Search size="large" placeholder="Large" />
      <div style={{ height: "1.2rem" }} />
      <Search size="medium" placeholder="Medium" />
      <div style={{ height: "1.2rem" }} />
      <Search size="small" placeholder="Small" />

      <img src={KERORO} alt="Keroro" width={400} />
      <RefreshButton onClick={() => console.log("getAPI 이곳에 넘길 예정")} />
    </div>
  );
};

export { HomePage };
