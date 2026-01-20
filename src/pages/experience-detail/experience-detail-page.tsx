import { useParams } from "react-router-dom";

import { ExperienceForm, ExperienceViewer } from "@/features/experience-detail";

type mode = "view" | "edit" | "create";

interface ExperiencePageProps {
  mode: mode;
}

const ExperienceDetailPage = ({ mode }: ExperiencePageProps) => {
  const { id } = useParams<{ id: string }>();

  switch (mode) {
    case "view":
      return <ExperienceViewer />;

    case "create":
    case "edit":
      return <ExperienceForm mode={mode} id={id} />;
  }
};

export { ExperienceDetailPage };
