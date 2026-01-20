import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import {
  ExperienceForm,
  ExperienceViewer,
  ExperienceAlertRenderer,
  useExperienceMode,
  initExperienceDetail,
} from "@/features/experience-detail";

import type { ExperienceMode } from "@/features/experience-detail";

interface ExperiencePageProps {
  Mode: ExperienceMode;
}

const ExperienceDetailPage = ({ Mode }: ExperiencePageProps) => {
  const { experienceId } = useParams<{ experienceId: string }>();
  const mode = useExperienceMode();

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
    </>
  );
};

export { ExperienceDetailPage };
