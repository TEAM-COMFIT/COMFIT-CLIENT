import { Load, COMPANY_BOOK, COMPANY_DOCS } from "@/shared/assets/images";

export interface LandingCardItem {
  title: string;
  content: string;
  sideImg: string;
}

export const LANDING_CARD_ITEMS: LandingCardItem[] = [
  {
    title: "경험 등록",
    content: `STAR 기업으로 나의 경험을 체계적으로 정리하고 저장합니다.
상황, 과제, 행동, 결과를 명확하게 구조화하세요`,
    sideImg: COMPANY_BOOK,
  },
  {
    title: "기업분석 리스트",
    content: `산업별·기업 규모별로 분류된 기업의 인재상과 JD 분석,
최신 동향을 한눈에 확인할 수 있습니다`,
    sideImg: Load,
  },
  {
    title: "경험 매칭",
    content: `기업이 중요하게 보는 관점과 나의 경험을 자동으로 매칭하고
어필해야 할 요소를 구체적으로 제시합니다`,
    sideImg: COMPANY_DOCS,
  },
];
