import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { CompanyResponseType, GetCompaniesParams } from "@/features/home";

const getCompanies = async ({
  keyword,
  industry,
  scale,
  sort,
  page,
  isRecruited,
}: GetCompaniesParams) => {
  const response = await api.companies.getCompanyList(
    {
      keyword,
      industry,
      scale,
      sort,
      page,
      isRecruited,
    },
    { secure: false }
  );
  return response.result as unknown as CompanyResponseType;
};

const useGetCompanies = ({
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
    placeholderData: (previousData) => previousData,
  });
};

export { useGetCompanies };
