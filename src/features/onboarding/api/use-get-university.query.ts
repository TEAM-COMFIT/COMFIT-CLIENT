import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { universityQueryKey } from "@/shared/api/config/query-key";

export const getUniversity = async ({ keyword }: { keyword: string }) => {
  const response = await api.universities.searchUniversities({ keyword });
  return response.result;
};

export const useGetUniversity = ({ keyword }: { keyword: string }) => {
  return useQuery({
    queryKey: universityQueryKey.list(keyword),
    queryFn: () => getUniversity({ keyword }),
  });
};
