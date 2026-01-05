type mode = 'create' | 'edit';

interface ExperienceFormProps {
  mode: mode;
}

const ExperienceForm = ({ mode }: ExperienceFormProps) => {
    // TODO: mode에 따라 isEdit 모드 분기 처리
    return (
        <div>
            <h1>Experience Form</h1>
        </div>
    );
};

export { ExperienceForm };