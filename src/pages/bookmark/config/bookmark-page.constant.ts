interface BookmarkRow {
  id: number;
  companyName: string;
  scrapedAt: string;
  isConnected: boolean;
}

export const BOOKMARK_PAGE_SIZE = 4;

export const BOOKMARK_MOCK_ROWS: BookmarkRow[] = [
  {
    id: 1,
    companyName: "쿠팡",
    scrapedAt: "2025-11-21",
    isConnected: true,
  },
  {
    id: 2,
    companyName: "SK네트웍스서비스",
    scrapedAt: "2025-11-20",
    isConnected: false,
  },
  {
    id: 3,
    companyName: "레진엔터테인먼트",
    scrapedAt: "2025-11-19",
    isConnected: false,
  },
  {
    id: 4,
    companyName: "컴퓨존",
    scrapedAt: "2025-11-19",
    isConnected: false,
  },
  {
    id: 5,
    companyName: "CJ ENM",
    scrapedAt: "2025-11-18",
    isConnected: true,
  },
  {
    id: 6,
    companyName: "삼성전자",
    scrapedAt: "2025-11-16",
    isConnected: false,
  },
  {
    id: 7,
    companyName: "네이버",
    scrapedAt: "2025-11-15",
    isConnected: true,
  },
  {
    id: 8,
    companyName: "카카오",
    scrapedAt: "2025-11-14",
    isConnected: false,
  },
  {
    id: 9,
    companyName: "우아한형제들",
    scrapedAt: "2025-11-12",
    isConnected: true,
  },
  {
    id: 10,
    companyName: "토스",
    scrapedAt: "2025-11-11",
    isConnected: true,
  },
  {
    id: 11,
    companyName: "라인플러스",
    scrapedAt: "2025-11-10",
    isConnected: false,
  },
  {
    id: 12,
    companyName: "당근",
    scrapedAt: "2025-11-09",
    isConnected: true,
  },
  {
    id: 13,
    companyName: "현대자동차",
    scrapedAt: "2025-11-08",
    isConnected: true,
  },
  {
    id: 14,
    companyName: "LG전자",
    scrapedAt: "2025-11-07",
    isConnected: false,
  },
  {
    id: 15,
    companyName: "포스코",
    scrapedAt: "2025-11-05",
    isConnected: true,
  },
];
