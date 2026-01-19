export interface PointCardItem {
  title: string;
  blueTitle: string;
  content: string;
}

export const POINT_CARD_ITEMS: PointCardItem[] = [
  {
    title: "기업이 중요하게 보는 관점",
    blueTitle: "3가지 분석",
    content: "IP 맥락 이해\n콘텐츠 성과 해석 능력\n협업 태도",
  },
  {
    title: "자소서에서 반드시",
    blueTitle: "드러내야 할 요소",
    content:
      "콘텐츠 성과 지표를 선택한 판단 기준\n성과를 바탕으로 조정한 의사결정 맥락",
  },
  {
    title: "기업 분석 기반",
    blueTitle: "표현 조정 포인트",
    content: "단기 성과 수치보다\n성과 해석 → 방향 설정\n과정 중심으로 작성",
  },
];
