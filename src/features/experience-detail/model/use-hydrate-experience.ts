import { useCallback } from "react";

import { toExperienceEntity } from "@/features/experience-detail/lib/to-experience-entity";
import { useExperienceDetailStore } from "@/features/experience-detail/store/experience.store";

import type { GetExperienceDetailResponse } from "@/features/experience-detail/api/use-get-experience-detail.query";

export const useHydrateExperienceFromApi = () => {
  const { setCurrent, setDefaultExperienceId, hydrateDraftFromCurrent } =
    useExperienceDetailStore((s) => s.actions);

  const hydrate = useCallback(
    (data: GetExperienceDetailResponse) => {
      const entity = toExperienceEntity(data);

      setCurrent(entity);
      setDefaultExperienceId(entity.isDefault ? entity.experienceId : null);
      hydrateDraftFromCurrent();
    },
    [setCurrent, setDefaultExperienceId, hydrateDraftFromCurrent]
  );

  return hydrate;
};

export const hydrateExperienceFromApi = (data: GetExperienceDetailResponse) => {
  const { actions } = useExperienceDetailStore.getState();
  const entity = toExperienceEntity(data);

  actions.setCurrent(entity);
  actions.setDefaultExperienceId(entity.isDefault ? entity.experienceId : null);
  actions.hydrateDraftFromCurrent();
};
