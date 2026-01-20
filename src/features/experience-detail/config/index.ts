export const EXPERIENCE_ROUTES = {
  LIST: "/experience",
  CREATE: "/experience/create",
  DETAIL: (experienceId: number | string) => `/experience/${experienceId}`,
  EDIT: (experienceId: number | string) => `/experience/${experienceId}/edit`,
} as const;

export { EXPERIENCE_MESSAGES, DEFAULT_BUTTON_LABELS } from "./messages";

export {
  EXPERIENCE_TYPE_OPTIONS,
  EXPERIENCE_LABEL_TO_CODE,
  EXPERIENCE_TYPE_LIST,
} from "./experience-type";
