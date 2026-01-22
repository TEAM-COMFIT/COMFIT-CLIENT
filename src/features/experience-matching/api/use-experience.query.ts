import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

export const getExperience = async () => {
  const response = await api.aiReports.getReportExperience();
  return response.result;
};

export const useGetExperience = () => {
  return useSuspenseQuery({
    queryKey: aiReportsQueryKey.experiences(),
    queryFn: () => getExperience(),
  });
};
