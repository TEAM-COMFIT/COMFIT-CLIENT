import { toExperienceEntity } from "@/features/experience-detail/lib/to-experience-entity";
import { useExperienceDetailStore } from "@/features/experience-detail/store/experience.store";

import type { GetExperienceDetailResponse } from "@/features/experience-detail/api/use-get-experience-detail.query";

export const hydrateExperienceFromApi = (data: GetExperienceDetailResponse) => {
  const { actions } = useExperienceDetailStore.getState();
  const entity = toExperienceEntity(data);

  actions.setCurrent(entity);
  actions.setDefaultExperienceId(entity.isDefault ? entity.experienceId : null);
  actions.hydrateDraftFromCurrent();
};
