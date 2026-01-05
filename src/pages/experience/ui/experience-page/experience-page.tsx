import { ExperienceForm } from "./experience-form";
import { ExperienceViewer } from "./experience-viewer";

type mode = "view" | "edit" | "create";

interface ExperiencePageProps {
  mode: mode;
}

const ExperiencePage = ({ mode }: ExperiencePageProps) => {
  switch (mode) {
    case "view":
      return <ExperienceViewer />;

    case "create":
    case "edit":
      return <ExperienceForm mode={mode} />;
  }
};

export { ExperiencePage };
