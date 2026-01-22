import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { GetCompanyResponseDto } from "@/shared/api/generate/http-client";

export const getCompanyDetail = async (companyId: number) => {
  const response = await api.companies.getCompany(companyId);
  return response.result as unknown as GetCompanyResponseDto;
};

export const useGetCompanyDetail = (companyId: number) => {
  return useQuery({
    queryKey: companyQueryKey.detail(companyId),
    queryFn: () => getCompanyDetail(companyId),
    enabled: Number.isFinite(companyId) && companyId > 0,
    throwOnError: (error) =>
      !(isAxiosError(error) && error.response?.status === 404),
  });
};
