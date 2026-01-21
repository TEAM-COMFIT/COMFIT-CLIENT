import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

interface CompanyListItem {
  id: number;
  name: string;
  industry: string;
  scale: string;
  logo: string;
  photoUrl: string;
}

interface CompanyResponseType {
  content: CompanyListItem[];
  currentPage: number;
  totalPage: number;
  totalElements: number;
}
interface GetCompaniesParams {
  keyword?: string;
  industry?: string;
  scale?: string;
  sort?: string;
  page?: number;
  isRecruited?: boolean;
}

export const getCompanies = async ({
  keyword,
  industry,
  scale,
  sort,
  page,
  isRecruited,
}: GetCompaniesParams) => {
  const response = await api.companies.getCompanyList({
    keyword,
    industry,
    scale,
    sort,
    page,
    isRecruited,
  });
  return response.result as unknown as CompanyResponseType;
};

export const useGetCompanies = ({
  keyword,
  industry,
  scale,
  sort,
  page,
  isRecruited,
}: GetCompaniesParams) => {
  return useQuery({
    queryKey: companyQueryKey.search(
      keyword,
      industry,
      scale,
      sort,
      page,
      isRecruited
    ),

    queryFn: () =>
      getCompanies({
        keyword,
        industry,
        scale,
        sort,
        page,
        isRecruited,
      }),
  });
};
