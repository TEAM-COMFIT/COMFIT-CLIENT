import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { Company } from "../type";

export const getCompanyList = async (keyword: string) => {
  const response = await api.companies.getCompanySearchList({ keyword });

  return response.result as unknown as Company[];
};

export const useGetCompanyList = (keyword: string) => {
  return useQuery({
    queryKey: companyQueryKey.keyword(keyword),
    queryFn: () => getCompanyList(keyword),
  });
};
