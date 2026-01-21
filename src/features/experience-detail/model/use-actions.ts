import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";

import {
  useCreateExperience,
  useUpdateExperience,
  useDeleteExperience as useDeleteExperienceMutation,
  useUpdateExperienceDefault,
} from "../api/experience.query";
import { DEFAULT_BUTTON_LABELS } from "../config";
import { validateExperienceDraft } from "../lib/validation";
import { useExperienceDetailStore } from "../store/experience.store";
import {
  useExperienceActions,
  useExperienceCurrent,
  useExperienceDraft,
  useExperienceMode,
} from "../store/use-experience-hooks";

import {
  showDefaultSettingError,
  showDeleteError,
  showDeleteSuccess,
  showSaveError,
  showSaveSuccess,
  showValidationError,
} from "./use-alert";

import type { ExperienceUpsertBody } from "../types/experience-detail.types";

export interface ExperienceRequestType {
  title: string;

  type: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";

  startAt: string;

  endAt: string;

  situation: string;

  task: string;

  action: string;

  result: string;

  isDefault?: boolean;
}

const toExperienceRequestDto = (
  draft: ExperienceUpsertBody
): ExperienceRequestType => {
  if (!draft.type || !draft.startAt || !draft.endAt) {
    throw new Error("필수 필드가 누락되었습니다.");
  }

  return {
    title: draft.title,
    type: draft.type,
    startAt: draft.startAt,
    endAt: draft.endAt,
    situation: draft.situation,
    task: draft.task,
    action: draft.action,
    result: draft.result,
  };
};

export const useExperienceSubmit = () => {
  const navigate = useNavigate();

  const mode = useExperienceDetailStore((s) => s.mode);
  const draft = useExperienceDetailStore((s) => s.draft);
  const current = useExperienceDetailStore((s) => s.current);
  const { setMode, setCurrent, hydrateDraftFromCurrent, setIsSubmitting } =
    useExperienceDetailStore((s) => s.actions);

  const createMutation = useCreateExperience({
    onSuccess: (data) => {
      hydrateDraftFromCurrent();
      setMode("view");
      setIsSubmitting(false);
      showSaveSuccess();

      navigate(ROUTES.EXPERIENCE_DETAIL(String(data)), { replace: true });
    },
    onError: (error) => {
      setIsSubmitting(false);
      showSaveError();
      console.error("Experience create failed:", error);
    },
  });

  const updateMutation = useUpdateExperience({
    onSuccess: () => {
      if (current) {
        setCurrent({ ...current, ...draft });
        hydrateDraftFromCurrent();
        setMode("view");
        setIsSubmitting(false);
        showSaveSuccess();

        navigate(ROUTES.EXPERIENCE_DETAIL(String(current.experienceId)), {
          replace: true,
        });
      }
    },
    onError: (error) => {
      setIsSubmitting(false);
      showSaveError();
      console.error("Experience update failed:", error);
    },
  });

  const submit = useCallback(async () => {
    const result = validateExperienceDraft(draft);

    if (!result.ok) {
      showValidationError(result.toastMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const requestDto = toExperienceRequestDto(draft);

      if (mode === "create") {
        createMutation.mutate(requestDto);
        return;
      }

      if (mode === "edit" && current && current.experienceId) {
        updateMutation.mutate({
          experienceId: current.experienceId,
          body: requestDto,
        });
        return;
      }
    } catch (error) {
      setIsSubmitting(false);
      showSaveError();
      console.error("Experience save failed:", error);
    }
  }, [draft, mode, current, createMutation, updateMutation, setIsSubmitting]);

  return { submit };
};

export const useExperienceHeaderActions = () => {
  const navigate = useNavigate();

  const mode = useExperienceMode();
  const current = useExperienceCurrent();
  const draft = useExperienceDraft();
  const { setCurrentDefault, setMode, hydrateDraftFromCurrent } =
    useExperienceActions();

  const deleteMutation = useDeleteExperienceMutation({
    onSuccess: () => {
      showDeleteSuccess();
      navigate(ROUTES.EXPERIENCE);
    },
    onError: (error) => {
      showDeleteError();
      console.error("Experience delete failed:", error);
    },
  });

  const updateDefaultMutation = useUpdateExperienceDefault({
    onSuccess: (data) => {
      setCurrentDefault(data.isDefault);
    },
    onError: (error) => {
      showDefaultSettingError();
      console.error("Experience default toggle failed:", error);
    },
  });

  const showEditDelete = mode === "view" && Boolean(current);

  const showSubmit = mode === "create" || mode === "edit";

  const isDraftDefault = draft.isDefault;

  const defaultButtonLabel = useMemo(() => {
    return isDraftDefault
      ? DEFAULT_BUTTON_LABELS.UNSET
      : DEFAULT_BUTTON_LABELS.SET;
  }, [isDraftDefault]);

  const onClickEdit = useCallback(() => {
    if (!current) return;

    setMode("edit");
    hydrateDraftFromCurrent();

    navigate(ROUTES.EXPERIENCE_EDIT(String(current.experienceId)));
  }, [current, hydrateDraftFromCurrent, navigate, setMode]);

  const onClickDelete = useCallback(
    async (experienceId?: number) => {
      const targetId = experienceId ?? current?.experienceId;
      if (!targetId) return;

      deleteMutation.mutate(targetId);
    },
    [current, deleteMutation]
  );

  const onToggleDefault = useCallback(() => {
    if (!current?.experienceId) return;
    updateDefaultMutation.mutate(current.experienceId);
  }, [current, updateDefaultMutation]);

  return {
    showEditDelete,
    showSubmit,

    isDraftDefault,
    defaultButtonLabel,

    onClickEdit,
    onClickDelete,
    onToggleDefault,
  };
};

export const useDeleteExperience = () => {
  const current = useExperienceCurrent();

  return {
    targetExperience: current,
    canDelete: Boolean(current),
  };
};
