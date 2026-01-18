export type AlertVariant = "warning" | "info" | "success" | "error";

export interface AlertProps {
  variant: AlertVariant;
  title: string;
  description: string;
  onClose: () => void;
}
