import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceList } from "../type/experience";
import type { ExperienceTypeCode } from "@/shared/config";

export const getExperienceList = async ({
  type,
  page,
}: {
  type?: ExperienceTypeCode | undefined;
  page: number;
}) => {
  const response = await api.experiences.getSummaryExperienceList({
    type,
    page,
  });
  return response.result as unknown as ExperienceList;
};

export const useGetExperienceList = ({
  type,
  page,
}: {
  type: ExperienceTypeCode | null;
  page: number;
}) => {
  return useQuery({
    queryKey: experienceQueryKey.list(type ?? "", page),
    queryFn: () => getExperienceList({ type: type ?? undefined, page }),
  });
};
