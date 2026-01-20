import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { meQueryKey } from "@/shared/api/config/query-key";

export const getProfile = async () => {
  const response = await api.me.getMe();
  return response.result;
};

export const useGetProfile = ({ enabled = true }: { enabled?: boolean }) => {
  return useQuery({
    queryKey: meQueryKey.profile(),
    queryFn: () => getProfile(),
    staleTime: Infinity,
    enabled: enabled,
  });
};
