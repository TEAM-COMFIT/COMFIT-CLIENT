export type ExperienceMode = "view" | "create" | "edit";

export type ExperienceType = "PROJECT" | "INTERNSHIP" | "EDUCATION" | "ETC";

export interface ExperienceUpsertBody {
  title: string;

  type: ExperienceType | null;

  startAt: string | null;

  endAt: string | null;

  situation: string;

  task: string;

  action: string;

  result: string;

  isDefault: boolean;
}

export interface ExperienceEntity extends ExperienceUpsertBody {
  experienceId: number;
}

export type DefaultExperience = {
  experienceId: number | null;
};
