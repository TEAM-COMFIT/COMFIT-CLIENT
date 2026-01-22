import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useReportStore } from "@/features/experience-matching/store/report.store";

export const StoreResetListener = () => {
  const location = useLocation();
  const reset = useReportStore((state) => state.reset);

  useEffect(() => {
    if (location.pathname !== ROUTES.EXPERIENCE_MATCHING) {
      reset();
    }
  }, [location.pathname, reset]);

  return null;
};
