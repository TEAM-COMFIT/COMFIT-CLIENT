import { useEffect, useCallback } from "react";
import { useBlocker } from "react-router-dom";

import { useModal } from "@/shared/ui/modal/use-modal";

import { initialDraft, useExperienceDetailStore } from "../store/experience.store";

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

  const { isOpen, handleModal } = useModal();

  const shouldBlock = (mode === "create" || mode === "edit") && isDraftDirty(draft);

  const blocker = useBlocker(() => {
    const isSubmitting = useExperienceDetailStore.getState().isSubmitting;
    return shouldBlock && !isSubmitting;
  });

  useEffect(() => {
    if (blocker.state === "blocked" && !isOpen) {
      handleModal();
    }
  }, [blocker.state, isOpen, handleModal]);

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
    handleModal();
  }, [blocker, handleModal]);

  const cancelLeave = useCallback(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    handleModal();
  }, [blocker, handleModal]);

  return {
    isOpen,
    confirmLeave,
    cancelLeave,
  };
};
