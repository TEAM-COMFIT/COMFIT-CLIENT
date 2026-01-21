import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";

import { DEFAULT_BUTTON_LABELS } from "../config";
import { validateExperienceDraft } from "../lib/validation";
import {
  useExperienceActions,
  useExperienceCurrent,
  useExperienceDraft,
  useExperienceMode,
} from "../store/selectors";
import { useExperienceDetailStore } from "../store/experience.store";

import { showDeleteError, showSaveError, showValidationError } from "./use-alert";

import type { ExperienceEntity, ExperienceUpsertBody } from "../types";

// Mock ID 생성 (API 연동 전까지 임시 사용)
const generateMockExperienceId = (): number => {
  return Date.now();
};

// API 함수 자리
const _createExperience = async (
  _body: ExperienceUpsertBody,
): Promise<{ experienceId: number }> => {
  throw new Error("Not implemented - 다음 PR에서 API 연동 예정");
};

const _updateExperience = async (
  _experienceId: number,
  _body: ExperienceUpsertBody,
): Promise<void> => {
  throw new Error("Not implemented - 다음 PR에서 API 연동 예정");
};

void _createExperience; // TODO: API 연동 후 제거
void _updateExperience; // TODO: API 연동 후 제거

export const useExperienceSubmit = () => {
  const navigate = useNavigate();

  const mode = useExperienceDetailStore((s) => s.mode);
  const draft = useExperienceDetailStore((s) => s.draft);
  const current = useExperienceDetailStore((s) => s.current);
  const { setMode, setCurrent, hydrateDraftFromCurrent, setIsSubmitting } =
    useExperienceDetailStore((s) => s.actions);

  const submit = useCallback(async () => {
    // 1. 유효성 검사
    const result = validateExperienceDraft(draft);

    if (!result.ok) {
      showValidationError(result.toastMessage);
      return;
    }

    // 2. API 요청
    try {
      setIsSubmitting(true);

      if (mode === "create") {
        // TODO: API 연동 시 아래 주석 해제
        // const { experienceId } = await createExperience(draft);
        // console.log("Created experience:", experienceId);

        // API 연동 전: mock ID를 사용하여 view 모드로 전환
        const mockId = generateMockExperienceId();
        const newExperience: ExperienceEntity = {
          ...draft,
          experienceId: mockId,
        };

        setCurrent(newExperience);
        hydrateDraftFromCurrent();

        setMode("view");

        navigate(ROUTES.EXPERIENCE_DETAIL(String(mockId)), { replace: true });
        return;
      }

      if (mode === "edit" && current) {
        // TODO: API 연동 시 아래 주석 해제
        // await updateExperience(current.experienceId, draft);

        setCurrent({ ...current, ...draft });
        hydrateDraftFromCurrent();
        setMode("view");

        navigate(ROUTES.EXPERIENCE_DETAIL(String(current.experienceId)), {
          replace: true,
        });
        return;
      }
    } catch (error) {
      setIsSubmitting(false);
      showSaveError();
      console.error("Experience save failed:", error);
    }
  }, [
    draft,
    mode,
    current,
    navigate,
    setMode,
    setCurrent,
    hydrateDraftFromCurrent,
    setIsSubmitting,
  ]);

  return { submit };
};

// API 함수 자리
const _deleteExperience = async (_experienceId: number): Promise<void> => {
  throw new Error("Not implemented - 다음 PR에서 API 연동 예정");
};
void _deleteExperience; // TODO: API 연동 후 제거

export const useExperienceHeaderActions = () => {
  const navigate = useNavigate();

  const mode = useExperienceMode();
  const current = useExperienceCurrent();
  const draft = useExperienceDraft();
  const { toggleDraftDefault, setMode, hydrateDraftFromCurrent } =
    useExperienceActions();

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

      try {
        // API 연동 시 코드 작성

        navigate(ROUTES.EXPERIENCE);
      } catch (error) {
        showDeleteError();
        console.error("Experience delete failed:", error);
      }
    },
    [current, navigate],
  );

  const onToggleDefault = useCallback(() => {
    toggleDraftDefault();
  }, [toggleDraftDefault]);

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
