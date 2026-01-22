import { useEffect, useCallback, useRef } from "react";
import { useBlocker } from "react-router-dom";

import { useModal } from "@/shared/ui/modal/use-modal";

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

export const useLeaveConfirm = () => {
  const mode = useExperienceDetailStore((s) => s.mode);
  const draft = useExperienceDetailStore((s) => s.draft);

  const { isOpen, openModal, closeModal } = useModal();

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

  const prevBlockerStateRef = useRef(blocker.state);

  useEffect(() => {
    const wasBlocked = prevBlockerStateRef.current === "blocked";
    const nowBlocked = blocker.state === "blocked";
    prevBlockerStateRef.current = blocker.state;

    if (nowBlocked && !wasBlocked && !isOpen) {
      openModal();
    }
  }, [blocker.state, isOpen, openModal]);

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

  const confirmLeave = useCallback(() => {
    if (blocker.state === "blocked") {
      blocker.proceed();
    }
    closeModal();
  }, [blocker, closeModal]);

  const cancelLeave = useCallback(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    closeModal();
  }, [blocker, closeModal]);

  return {
    isOpen,
    confirmLeave,
    cancelLeave,
  };
};
