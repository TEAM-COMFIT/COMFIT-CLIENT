import { useState } from "react";

import { MatchingAutoComplete } from "@/features/experience-matching/ui/matching-auto-complete/matching-auto-complete";
import { MOCK_AUTOCOMPLETE } from "@/features/experience-matching/ui/matching-auto-complete/mock";
const MyPage = () => {
  const [inputValue, setInputValue] = useState(""); // 실시간 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 디바운스된 키워드 상태

  // TODO: api 연동 필요
  // const { data: searchResults = [] } = useGetMatchingList(searchKeyword);
  const searchResults = MOCK_AUTOCOMPLETE.filter((item) =>
    item.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div style={{ display: "flex", gap: "2rem", paddingTop: "10rem" }}>
      <h1>Welcome to the My Page</h1>
      <MatchingAutoComplete
        value={inputValue}
        onChange={setInputValue}
        results={searchResults} // API 호출 결과 전달
        onDebounceChange={setSearchKeyword} // 디바운스된 키워드 업데이트
        onSearch={(val) => console.log("최종 검색:", val)}
      />
    </div>
  );
};

export { MyPage };
