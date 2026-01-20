import { useSuspenseQuery } from "@tanstack/react-query";

import { queryClient } from "@/shared/api";
import { api } from "@/shared/api/axios-instance";
import { meQueryKey } from "@/shared/api/config/query-key";

export const getLogin = async (code: string) => {
  const response = await api.oauth.kakaoCallback({ code }, { secure: false });
  return response;
};

export const useLogin = (code: string) => {
  return useSuspenseQuery({
    queryKey: ["kakao-login", code],
    queryFn: async () => {
      const response = await getLogin(code);
      const data = response.result;

      if (data?.name) {
        queryClient.setQueryData(meQueryKey.profile(), {
          name: data.name,
          email: "",
          educationLevel: null,
          firstIndustry: null,
          firstJob: null,
          profileImage: null,
        });

        queryClient.invalidateQueries({
          queryKey: meQueryKey.profile(),
        });
      }
      return response;
    },
  });
};
