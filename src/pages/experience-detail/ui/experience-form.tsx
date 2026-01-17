import { CustomDatePicker } from "@/features/experience-detail/ui/custom-date-picker";
type mode = "create" | "edit";

interface ExperienceFormProps {
  mode: mode;
  id?: string;
}

const ExperienceForm = ({ mode, id }: ExperienceFormProps) => {
  // TODO: mode에 따라 isEdit 모드 분기 처리
  return (
    <div>
      <h1>
        Experience Form - {mode} {mode === "edit" && `${id}`}
      </h1>
      <CustomDatePicker />
    </div>
  );
};

export { ExperienceForm };
