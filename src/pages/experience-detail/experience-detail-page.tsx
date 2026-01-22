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
  hydrateExperienceFromApi,
} from "@/features/experience-detail";
import { ModalBasic } from "@/shared/ui/modal/modal-basic";

import type { ExperienceMode } from "@/features/experience-detail";

interface ExperiencePageProps {
  mode: ExperienceMode;
}

const ExperienceDetailPage = ({ mode }: ExperiencePageProps) => {
  const { id: experienceId } = useParams<{ id: string }>();
  const currentMode = useExperienceMode();
  const { isOpen, confirmLeave, cancelLeave } = useLeaveConfirm();
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
      hydrateExperienceFromApi(data);
    }
  }, [data, experienceId]);

  if (shouldFetch && isLoading) {
    return null;
  }

  if (shouldFetch && isError) {
    return <div>경험 데이터를 불러오는데 실패했습니다.</div>;
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
      <ModalBasic
        isOpen={isOpen}
        onClose={cancelLeave}
        onConfirm={confirmLeave}
        title={`작성중인 내용이 있습니다.\n정말 나가시겠습니까?`}
        subTitle="저장하지 않으면 내용이 사라져요."
        closeText="나가기"
        confirmText="이동하기"
      />
    </>
  );
};

export { ExperienceDetailPage };
