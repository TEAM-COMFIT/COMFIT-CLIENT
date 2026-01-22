import { Alert } from "@/shared/ui/alert";

import {
  useExperienceAlerts,
  useExperienceAlertActions,
} from "../../model/use-alert";

export const ExperienceAlertRenderer = () => {
  const alerts = useExperienceAlerts();
  const { close } = useExperienceAlertActions();

  return (
    <>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          variant={alert.variant}
          title={alert.title}
          description={alert.description}
          onClose={() => close(alert.id)}
        />
      ))}
    </>
  );
};
