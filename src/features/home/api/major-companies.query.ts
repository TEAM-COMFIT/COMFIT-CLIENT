import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { ScaleCode, IndustryCode } from "@/shared/config";
export interface GetMajorCompaniesData {
  id: number;
  name: string;
  industry: IndustryCode;
  scale: ScaleCode;
  logo: string;
  photoUrl: string;
}

export const getMajorCompanies = async ({ rank }: { rank: number }) => {
  const response = await api.companies.getFeaturedCompanies(
    { rank },
    { secure: false }
  );
  console.log("토큰 없이 호출 결과:", response);
  return response.result as unknown as GetMajorCompaniesData[];
};

export const useGetMajorCompanies = ({ rank }: { rank: number }) => {
  return useQuery({
    queryKey: companyQueryKey.major(rank),
    queryFn: () => getMajorCompanies({ rank }),
  });
};
