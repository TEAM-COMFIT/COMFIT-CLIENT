import { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import {
  ExperienceForm,
  ExperienceViewer,
  ExperienceAlertRenderer,
  useExperienceMode,
  initExperienceDetail,
  useLeaveConfirm,
  useGetExperienceDetail,
  applyExperienceDetailFromApi,
  EXPERIENCE_MESSAGES,
} from "@/features/experience-detail";

import type { ExperienceMode } from "@/features/experience-detail";

const ExperienceDetailPage = ({ mode }: { mode: ExperienceMode }) => {
  const { id: experienceId } = useParams<{ id: string }>();
  const currentMode = useExperienceMode();
  useLeaveConfirm();
  const initializedExperienceIdRef = useRef<string | null>(null);

  const parsedExperienceId = experienceId ? Number(experienceId) : NaN;
  const isValidExperienceId =
    Number.isFinite(parsedExperienceId) && parsedExperienceId > 0;

  const shouldFetch = mode !== "create" && isValidExperienceId;
  const { data, isLoading, isError } = useGetExperienceDetail({
    experienceId: parsedExperienceId,
    enabled: shouldFetch,
  });

  useLayoutEffect(() => {
    initExperienceDetail(mode, experienceId);
  }, [mode, experienceId]);

  useEffect(() => {
    if (data && initializedExperienceIdRef.current !== experienceId) {
      initializedExperienceIdRef.current = experienceId ?? null;
      applyExperienceDetailFromApi(data);
    }
  }, [data, experienceId]);

  if (shouldFetch && isLoading) {
    return null;
  }

  if (shouldFetch && isError) {
    return <div>{EXPERIENCE_MESSAGES.API.FETCH_FAILED}</div>;
  }

  const content = (() => {
    switch (currentMode) {
      case "view":
        return <ExperienceViewer />;

      case "create":
      case "edit":
        return <ExperienceForm />;
    }
  })();

  return (
    <>
      {content}
      <ExperienceAlertRenderer />
    </>
  );
};

export { ExperienceDetailPage };