import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceRequestDto } from "@/shared/api/generate/http-client";

export interface CreateExperienceResponse {
  experienceId: number;
}

export interface GetExperienceDetailResponse {
  experienceId: number;
  title: string;
  isDefault: boolean;
  type: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";
  startAt: string;
  endAt: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface UpdateDefaultResponse {
  isDefault: boolean;
}

export const createExperience = async (
  body: ExperienceRequestDto
): Promise<CreateExperienceResponse> => {
  const response = await api.experiences.createExperience(body);
  return { experienceId: response.result };
};

export const getExperienceDetail = async (
  experienceId: number
): Promise<GetExperienceDetailResponse> => {
  const response = await api.experiences.getExperience(experienceId);
  return {
    experienceId,
    ...response.result,
  } as GetExperienceDetailResponse;
};

export const deleteExperience = async (experienceId: number): Promise<void> => {
  await api.experiences.deleteExperience(experienceId);
};

export const updateExperience = async (
  experienceId: number,
  body: ExperienceRequestDto
): Promise<void> => {
  await api.experiences.updateExperience(experienceId, body);
};

export const updateExperienceDefault = async (
  experienceId: number
): Promise<UpdateDefaultResponse> => {
  const response = await api.experiences.updateDefault(experienceId, {
    format: "json",
  });
  return response.result as UpdateDefaultResponse;
};

interface UseGetExperienceDetailOptions {
  experienceId: number;
  enabled?: boolean;
}

export const useGetExperienceDetail = ({
  experienceId,
  enabled = true,
}: UseGetExperienceDetailOptions) => {
  return useQuery({
    queryKey: experienceQueryKey.detail(experienceId),
    queryFn: () => getExperienceDetail(experienceId),
    staleTime: 5 * 60 * 1000,
    enabled: enabled && experienceId > 0,
  });
};

interface UseCreateExperienceOptions {
  onSuccess?: (data: CreateExperienceResponse) => void;
  onError?: (error: unknown) => void;
}

export const useCreateExperience = (options?: UseCreateExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ExperienceRequestDto) => createExperience(body),
    onSuccess: (data: CreateExperienceResponse) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.(data);
    },
    onError: options?.onError,
  });
};

interface UseUpdateExperienceOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useUpdateExperience = (options?: UseUpdateExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      experienceId,
      body,
    }: {
      experienceId: number;
      body: ExperienceRequestDto;
    }) => updateExperience(experienceId, body),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.detail(variables.experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};

interface UseDeleteExperienceOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteExperience = (options?: UseDeleteExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => deleteExperience(experienceId),
    onSuccess: (_, experienceId) => {
      queryClient.removeQueries({
        queryKey: experienceQueryKey.detail(experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};

interface UseUpdateExperienceDefaultOptions {
  onSuccess?: (data: UpdateDefaultResponse) => void;
  onError?: (error: unknown) => void;
}

export const useUpdateExperienceDefault = (
  options?: UseUpdateExperienceDefaultOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => updateExperienceDefault(experienceId),
    onSuccess: (data, experienceId) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.detail(experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.(data);
    },
    onError: options?.onError,
  });
};
