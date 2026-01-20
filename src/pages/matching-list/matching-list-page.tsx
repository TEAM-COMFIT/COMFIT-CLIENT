import { MatchingItem } from "@/features/matching-list/ui/matching-item";
import { COMPANY_DETAIL } from "@/shared/assets/images";
const MatchingListPage = () => {
  return (
    <main>
      <h1>Welcome to the Matching List Page</h1>
      <MatchingItem
        matchingId={1}
        companyName="기업명"
        createdAt="2025-12-28"
        title="하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다30자여도 무너지지 않습니다."
      />
      <img
        src={COMPANY_DETAIL}
        alt="Company Detail"
        style={{ border: "1px solid red" }}
      />
    </main>
  );
};

export { MatchingListPage };
