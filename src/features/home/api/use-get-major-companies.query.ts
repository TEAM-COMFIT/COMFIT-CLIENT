import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { MajorCompanyType } from "@/features/home";
const getMajorCompanies = async ({ rank }: { rank: number }) => {
  const response = await api.companies.getFeaturedCompanies(
    { rank },
    { secure: false }
  );
  return response.result as unknown as MajorCompanyType[];
};

const useGetMajorCompanies = ({ rank }: { rank: number }) => {
  return useQuery({
    queryKey: companyQueryKey.major(rank),
    queryFn: () => getMajorCompanies({ rank }),
    placeholderData: (previousData) => previousData,
  });
};

export { useGetMajorCompanies };
