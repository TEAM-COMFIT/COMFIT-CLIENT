import { Tooltip } from "@/shared/ui/tooltip/tooltip";
import {
  HELP_TOOLTIP_CONTENT,
  GUIDE_TOOLTIP_CONTENT,
} from "@/shared/ui/tooltip/tooltip.content";

import * as styles from "./experience-matching-page.css";
const ExperienceMatchingPage = () => {
  return (
    <div className={styles.experienceMatchingPage}>
      <h1>Welcome to the Experience Matching Page</h1>
      <Tooltip type="help" label="도움말">
        {HELP_TOOLTIP_CONTENT}
      </Tooltip>
      <Tooltip type="guide" label="작성 가이드">
        {GUIDE_TOOLTIP_CONTENT}
      </Tooltip>
    </div>
  );
};

export { ExperienceMatchingPage };
