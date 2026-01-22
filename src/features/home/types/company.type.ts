interface CompanyListItem {
  id: number;
  name: string;
  industry: string;
  scale: string;
  logo: string;
  photoUrl: string;
}

export interface CompanyResponseType {
  content: CompanyListItem[];
  currentPage: number;
  totalPage: number;
  totalElements: number;
}

export interface GetCompaniesParams {
  keyword?: string;
  industry?: string;
  scale?: string;
  sort?: string;
  page?: number;
  isRecruited?: boolean;
}
