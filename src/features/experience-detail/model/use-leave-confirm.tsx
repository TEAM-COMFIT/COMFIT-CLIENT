import { useEffect, useCallback } from "react";
import { useBlocker } from "react-router-dom";

import { IconWarn } from "@/shared/assets/icons";
import { modalStore } from "@/shared/model/store";
import { ModalBasic } from "@/shared/ui";

import {
  initialDraft,
  useExperienceDetailStore,
} from "../store/experience.store";

import type { ExperienceUpsertBody } from "../types/experience-detail.types";

const isDraftDirty = (draft: ExperienceUpsertBody): boolean => {
  return (
    draft.title !== initialDraft.title ||
    draft.type !== initialDraft.type ||
    draft.startAt !== initialDraft.startAt ||
    draft.endAt !== initialDraft.endAt ||
    draft.situation !== initialDraft.situation ||
    draft.task !== initialDraft.task ||
    draft.action !== initialDraft.action ||
    draft.result !== initialDraft.result
  );
};

const LEAVE_MODAL_ID = "leave-confirm-modal";

export const useLeaveConfirm = () => {
  const mode = useExperienceDetailStore((s) => s.mode);
  const draft = useExperienceDetailStore((s) => s.draft);

  const shouldBlock =
    (mode === "create" || mode === "edit") && isDraftDirty(draft);

  const blocker = useBlocker(() => {
    const state = useExperienceDetailStore.getState();
    const currentMode = state.mode;
    const currentDraft = state.draft;
    const isSubmitting = state.isSubmitting;
    const isTransitioning = state.isTransitioning;

    const shouldBlockNow =
      (currentMode === "create" || currentMode === "edit") &&
      isDraftDirty(currentDraft);

    return shouldBlockNow && !isSubmitting && !isTransitioning;
  });

  const confirmLeave = useCallback(() => {
    if (blocker.state === "blocked") {
      blocker.proceed();
    }
    modalStore.close(LEAVE_MODAL_ID);
  }, [blocker]);

  const cancelLeave = useCallback(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    modalStore.close(LEAVE_MODAL_ID);
  }, [blocker]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      modalStore.open(
        <ModalBasic
          icon={<IconWarn width={48} height={48} />}
          title={`작성 중인 내용이 있어요`}
          subTitle="저장하지 않으면 내용이 모두 사라져요."
          closeText="나가기"
          confirmText="계속 작성하기"
          onClose={confirmLeave}
          onConfirm={cancelLeave}
        />,
        0,
        undefined,
        LEAVE_MODAL_ID
      );
    }
  }, [blocker.state, cancelLeave, confirmLeave]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const isSubmitting = useExperienceDetailStore.getState().isSubmitting;
      if (shouldBlock && !isSubmitting) {
        e.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [shouldBlock]);

  return {};
};
