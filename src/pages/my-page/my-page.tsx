import { useState } from "react";

import { MatchingAutoComplete } from "@/features/experience-matching/ui/matching-auto-complete/matching-auto-complete";
const MyPage = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div style={{ display: "flex", gap: "2rem", paddingTop: "10rem" }}>
      <h1>Welcome to the My Page</h1>
      <MatchingAutoComplete
        value={keyword}
        onChange={setKeyword}
        onSearch={() => {
          console.log("검색:", keyword);
        }}
      />
    </div>
  );
};

export { MyPage };
