import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import {
  ExperienceForm,
  ExperienceViewer,
  ExperienceAlertRenderer,
  useExperienceMode,
  initExperienceDetail,
  useLeaveConfirm,
} from "@/features/experience-detail";
import { ModalBasic } from "@/shared/ui/modal/modal-basic";

import type { ExperienceMode } from "@/features/experience-detail";

interface ExperiencePageProps {
  Mode: ExperienceMode;
}

const ExperienceDetailPage = ({ Mode }: ExperiencePageProps) => {
  const { id: experienceId } = useParams<{ id: string }>();
  const mode = useExperienceMode();
  const { isOpen, confirmLeave, cancelLeave } = useLeaveConfirm();

  useLayoutEffect(() => {
    initExperienceDetail(Mode, experienceId);
  }, [Mode, experienceId]);

  const content = (() => {
    switch (mode) {
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
        title="작성중인 내용이 있습니다. 정말 나가시겠습니까?"
        subTitle="저장하지 않으면 내용이 사라져요."
        closeText="나가기"
        confirmText="이동하기"
      />
    </>
  );
};

export { ExperienceDetailPage };
