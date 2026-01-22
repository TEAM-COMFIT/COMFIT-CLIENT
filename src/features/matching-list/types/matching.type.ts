export interface MatchingItemType {
  id: number;
  companyName: string;
  experienceTitle: string;
  createdAt: string; // YYYY-MM-DD
}

export interface AiReportListResponse {
  totalElements: number;
  totalPage: number;
  currentPage: number;
  content: MatchingItemType[];
}
