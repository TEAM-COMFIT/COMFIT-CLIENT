import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { IndustryCode, ScaleCode } from "@/shared/config";

export interface RecommendCompanyItem {
  id: number;
  name: string;
  logo: string;
  industry: IndustryCode;
  scale: ScaleCode;
}

export const getCompanySuggestions = async (companyId: number) => {
  const response = await api.companies.getSuggestionCompany(companyId, {
    secure: false,
  });
  return response.result as unknown as RecommendCompanyItem[];
};

export const useGetCompanySuggestions = (companyId: number) => {
  return useQuery({
    queryKey: companyQueryKey.suggestion(companyId),
    queryFn: () => getCompanySuggestions(companyId),
    enabled: Number.isFinite(companyId) && companyId > 0,
  });
};
