import { MatchingItem } from "@/features/matching-list/ui/matching-item";
const MatchingListPage = () => {
  return (
    <div>
      <h1>Welcome to the Matching List Page</h1>
      <MatchingItem
        companyName="기업명"
        date="2025.12.28"
        title="경험제목"
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
};

export { MatchingListPage };
