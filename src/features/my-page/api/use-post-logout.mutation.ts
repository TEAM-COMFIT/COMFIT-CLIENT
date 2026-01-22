import { useMutation } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

export const postLogout = async () => {
  const response = await api.logout.logout();
  return response;
};

export const useLogout = () => {
  return useMutation({
    mutationFn: postLogout,
  });
};
